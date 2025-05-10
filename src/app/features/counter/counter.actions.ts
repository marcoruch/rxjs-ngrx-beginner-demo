
import { createAction, props } from '@ngrx/store';

export const counterIncrement = createAction(
  '[Store Example Counter] Increment value'
);

export const counterDecrement = createAction(
  '[Store Example Counter] Decrement value'
);

export const setCounter = createAction(
  '[Store Example Counter] Set value',
  props<{ value: number }>()
);
