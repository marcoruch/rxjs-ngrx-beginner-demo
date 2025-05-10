import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { Component } from '@angular/core';
import { selectCounterValue } from 'src/app/features/counter/counter.selectors';
import { map } from 'rxjs';

@Component({
  selector: 'app-store-consumer-one',
  templateUrl: './store-consumer-one.component.html',
  styleUrls: ['./store-consumer-one.component.scss'],
})
export class StoreConsumerOneComponent {
  counterPow2$ = this.store
    .select(selectCounterValue)
    .pipe(map((value) => `${value}^2 = ${value * value}`));

  constructor(readonly store: Store) {}
}
