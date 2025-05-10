import { CounterState, initialCounterState } from "./features/counter/counter.state";

export interface AppState {
    counter: CounterState;
}

export const initialState: AppState = {
  counter: initialCounterState
};
