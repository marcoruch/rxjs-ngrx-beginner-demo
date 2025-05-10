import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectCounterValue } from 'src/app/features/counter/counter.selectors';

@Component({
  selector: 'app-store-consumer-two',
  templateUrl: './store-consumer-two.component.html',
  styleUrls: ['./store-consumer-two.component.scss']
})
export class StoreConsumerTwoComponent {
  counterInfo$ = this.store.select(selectCounterValue)
   .pipe(
      map(value => `The current value is ${value}`)
    );

  constructor(readonly store: Store) { }

}
