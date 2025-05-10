import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, OperatorFunction, map, scan } from 'rxjs';

@Component({
  selector: 'app-counter-subject',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './counter-subject.component.html',
  styleUrls: ['./counter-subject.component.scss'],
})
export class CounterSubjectComponent {
  counterClicks$: BehaviorSubject<number> = new BehaviorSubject(0);
  counterClicksTimesTen$ = this.counterClicks$.pipe(this.multiplyByTen());
  counterClickLines$ = this.counterClicks$.pipe(this.trackCounterClicksAsNewsLines());

  increase = (): void => this.counterClicks$.next(this.counterClicks$.value + 1);

  trackCounterClicksAsNewsLines(): OperatorFunction<number, string[]> {
    return scan(
      (acc, curr) => [...acc, `Counter was clicked ${curr} times`],
      [] as string[]
    );
  }

  multiplyByTen(): OperatorFunction<number, number> {
    return map((x) => x * 10);
  }
}
