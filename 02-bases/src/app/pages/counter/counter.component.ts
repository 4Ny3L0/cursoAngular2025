import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterPageComponent {
  public counter: number = 10;
  public counterSignal = signal(10);

  public operation(value: number): void {
    if (value === 0) {
      this.counter = 0;
      this.counterSignal.set(0);
      return;
    }
    this.counter += value;
    this.counterSignal.update((currentValue) => (currentValue += value));
  }
}
