import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counterValue: number = 0;

  increment() {
    this.counterValue++;
  }

  decrement() {
    if (this.counterValue > 0) {
      this.counterValue--;
    }
  }

  reset() {
    this.counterValue = 0;
  }
}
