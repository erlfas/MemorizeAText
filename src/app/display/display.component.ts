import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  myForm: FormGroup;
  left: AbstractControl;
  right: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'left': [''],
      'right': ['']
    });

    this.left = this.myForm.controls['left'];
    this.left.valueChanges.subscribe((form: string) => {
      this.right.setValue(this.convert(form));
    });

    this.right = this.myForm.controls['right'];
    this.right.valueChanges.subscribe((form: string) => {
      
    });
  }

  convert(value: string): string {
    let lines: string[] = value.split('\n');

    let output: string = "";
    for (let line of lines) {
      let shortenedLine = line.split(' ').map(x => {
        // if leading character is number, return whole word
        if (parseInt(x[0], 10) || x[0] === '0') {
          return x;
        } else if (!this.isLetter(x.substr(0,1)) && x.length > 1) { // if leading character is symbol
          // Include leading non letter symbol
          let letter = x.substr(0, 2);
          return letter;
        } else { // if is letter
          let letter = x.substr(0, 1);
          if (x.length > 1 && x.endsWith(',') || x.endsWith('.') || x.endsWith('!') || x.endsWith(':') || x.endsWith(')')) {
            letter = letter + x.substring(x.length - 1, x.length); // include symbol at end
          }
          return letter;
        }
      }).join(' ');

      output = output + shortenedLine + "\n";
    }

    return output;
  }

  isLetter(str: string): boolean {
    let res: boolean = /[a-z]/i.test(str);
    return res;
  }

}