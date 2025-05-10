import { Action, createReducer } from '@ngrx/store';
import { AppState, initialState } from './app.state';

const _rootReducer = createReducer(
  initialState,
);

export function rootReducer(state: AppState | undefined, action: Action) {
  return _rootReducer(state, action);
}
