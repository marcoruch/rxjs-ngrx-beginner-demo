import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';
import { CounterState, initialCounterState } from './counter.state';

const _counterReducer = createReducer(
  initialCounterState,
  on(CounterActions.counterIncrement, (state) => ({ ...state, counter: state.counter + 1 })),
  on(CounterActions.counterDecrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(CounterActions.setCounter, (state, { value }) => ({ ...state, counter: value }))
);

export function counterReducer(state: CounterState | undefined, action: Action) {
  return _counterReducer(state, action);
}
