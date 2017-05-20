import { 
  Component, 
  EventEmitter, 
  Input, 
  Output 
} from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'text-adjuster',
  templateUrl: './text-adjuster.component.html',
  styleUrls: ['./text-adjuster.component.css']
})
export class TextAdjusterComponent {

  private size: number;

  /**
   * Outputs the size when it is changed.
   */
  @Output() onSizeEmitted: EventEmitter<number>;

  constructor() {
    this.size = 14;
    this.onSizeEmitted = new EventEmitter();
  }

  decrease(): void {
    if (this.size > 6) {
      this.size = this.size - 1;
      this.onSizeEmitted.emit(this.size);
    }
  }

  increase(): void {
    if (this.size < 50) {
      this.size = this.size + 1;
      this.onSizeEmitted.emit(this.size);
    }
  }

}