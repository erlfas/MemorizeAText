import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { TextsService } from '../text/texts.service';
import { Text } from '../text/text.model';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  myForm: FormGroup;
  left: AbstractControl;
  right: AbstractControl;
  title: AbstractControl;

  uid: number;
  fontSize: number;
  isSomethingToSave: boolean;

  constructor(public textsService: TextsService, fb: FormBuilder, ) {
    this.uid = 1;

    this.myForm = fb.group({
      'left': [''],
      'right': [''],
      'title': ['']
    });

    this.left = this.myForm.controls['left'];
    this.right = this.myForm.controls['right'];
    this.left.valueChanges.subscribe((str: string) => {
      this.right.setValue(this.convert(str));
      if (str != null && str.length > 0) {
        this.isSomethingToSave = true;
      } else {
        this.isSomethingToSave = false;
      }
    });
    
  }

  ngOnInit(): void {
    this.fontSize = 14;
    this.isSomethingToSave = false;
  }

  saveText(title: string, text: string): void {
    //console.log('saveText with title ' + title + " and with text " + text);
    this.textsService.addText(new Text(this.uid, title, text, this.convert(text)));

    this.uid = this.uid + 1;

    /*console.log('numTexts(): ' + this.textsService.numTexts());
    console.log('count(): ' + this.textsService.count());

    for (let text of this.textsService.texts) {
      console.log("Text: " + text.uid + ", " + text.title + ", " + text.originalText + ", " + text.shortenedText);
    }*/
  }

  convert(value: string): string {
    let lines: string[] = value.split('\n');

    let output: string = "";
    for (let line of lines) {
      let shortenedLine = line.split(' ').map(x => {
        // if leading character is number, return whole word
        if (parseInt(x[0], 10) || x[0] === '0') {
          return x;
        } else if (!this.isLetter(x.substr(0, 1)) && x.length > 1) { // if leading character is symbol
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

  sizeWasChanged(size: number): void {
    console.log('display: Font size was changed to: ' + size);
    this.fontSize = size;
  }

}