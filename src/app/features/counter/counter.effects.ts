import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { counterIncrement, counterDecrement, setCounter } from './counter.actions';

@Injectable()
export class CounterEffects {
  incrementToast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterIncrement),
      tap((): void => {
        this.snackBar.open('Incremented!', 'OK', { duration: 2000 });
      })
    ),
    { dispatch: false }
  );

  decrementToast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterDecrement),
      tap((): void => {
        this.snackBar.open('Decremented!', 'OK', { duration: 2000 });
      })
    ),
    { dispatch: false }
  );

  setValueToast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setCounter),
      tap(action => {
        this.snackBar.open(`Counter set to: ${action.value}`, 'OK', { duration: 2000 });
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private snackBar: MatSnackBar
  ) {}
}
