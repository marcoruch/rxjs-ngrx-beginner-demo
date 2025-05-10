import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterDecrement, counterIncrement, setCounter } from 'src/app/features/counter/counter.actions';
import { selectCounterValue } from 'src/app/features/counter/counter.selectors';

@Component({
  selector: 'app-store-example',
  templateUrl: './store-example.component.html',
  styleUrls: ['./store-example.component.scss']
})
export class StoreExampleComponent {
  counter$ = this.store.select(selectCounterValue);

  constructor(readonly store: Store) { }

  increment() {
    this.store.dispatch(counterIncrement());
  }

  decrement() {
    this.store.dispatch(counterDecrement());
  }

  refresh() {
    this.store.dispatch(setCounter({ value: 0 }));
  }

  setValue(stringValue: string | number) {
    const value = parseInt(stringValue.toString(), 10);
    this.store.dispatch(setCounter({ value }));
  }
}
