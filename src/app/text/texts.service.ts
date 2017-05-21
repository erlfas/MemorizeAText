import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Text } from './text.model';

@Injectable()
export class TextsService {

    counter: number;

    texts: Text[] = new Array<Text>();
    newTexts: Subject<Text> = new Subject<Text>();

    constructor() {
        this.counter = 0;

        this.newTexts
            .subscribe({
                next: (x) => { 
                    this.texts = this.texts.concat(x);
                }
            });
        
        this.newTexts
            .subscribe({
                next: (x) => { this.counter = this.counter + 1; }
            });
    }

    // an imperative function call to this action stream
    addText(text: Text): void {
        this.newTexts.next(text);
    }

    numTexts(): number {
        return this.texts.length;
    }

    count(): number {
        return this.counter;
    }
}

export const textsServiceInjectables: Array<any> = [
    TextsService
];