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
      //console.log('form changed to:', form);
    });
  }

  convert(value: string): string {
    let lines: string[] = value.split('\n');

    let output: string = "";
    for (let line of lines) {
      let shortenedLine = line.split(' ').map(x => {
        if (parseInt(x[0], 10) || x[0] === '0') {
          //console.log('is number: ', x);
          return x;
        } else {
          let letter = x.substr(0, 1);
          if (x.length > 1 && x.endsWith(',') || x.endsWith('.') || x.endsWith('!') || x.endsWith(':')) {
            letter = letter + x.substring(x.length - 1, x.length);
          }
          //console.log('first letter: ', letter);
          return letter;
        }
      }).join(' ');

      output = output + shortenedLine + "\n";
    }

    return output;
  }


}