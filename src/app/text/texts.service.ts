import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Text } from './text.model';

const initialTexts: Text[] = [];

interface ITextsOperation extends Function {
    (texts: Text[]): Text[];
}

@Injectable()
export class TextsService {
    // a stream that publishes new texts only once
    //newTexts: Subject<Text> = new Subject<Text>();

    // a stream that emits an array of the must up to date texts
    //texts: Observable<Text[]>;

    // receives _operations_ to be applied on alle the texts in 'texts'
    //updates: Subject<any> = new Subject<any>();

    // action stream
    //create: Subject<Text> = new Subject<Text>();

    counter: number;

    texts: Text[] = new Array<Text>();
    newTexts: Subject<Text> = new Subject<Text>();

    constructor() {
        this.counter = 0;

        this.newTexts
            .subscribe({
                next: (x) => { 
                    this.texts = this.texts.concat(x); 
                    console.log('# texts: ' + this.texts.length); 
                }
            });
        
        this.newTexts
            .subscribe({
                next: (x) => { this.counter = this.counter + 1; }
            });

        /*
        this.texts = this.updates
            .scan((texts: Text[], operation: ITextsOperation) => {
                return operation(texts);
            }, initialTexts)
            .publishReplay(1)
            .refCount();

        this.create
            .map(function(text: Text): ITextsOperation {
                return (texts: Text[]) => {
                    return texts.concat(text)
                };
            })
            .subscribe(this.updates);

        this.newTexts
            .subscribe(this.create);*/

        // newTexts => create => updates => texts
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