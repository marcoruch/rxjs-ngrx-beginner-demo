
import { createAction, props } from '@ngrx/store';

export const addMember = createAction(
  '[Project Planning] Add member',
  props<{ name: string; availableTime: number }>()
);

export const removeMember = createAction(
  '[Project Planning] Remove member',
  props<{ name: string }>()
);

export const resetAll = createAction(
  '[Project Planning] Reset all'
);

export const assignMember = createAction(
  '[Project Planning] Assign member',
  props<{ projectName: string; memberName: string, time: number }>()
);

export const addProject = createAction(
  '[Project Planning] Add project',
  props<{ name: string; neededTime: number }>()
);

export const removeProject = createAction(
  '[Project Planning] Remove project',
  props<{ name: string }>()
);

export const addInvalidCommand = createAction(
  '[Project Planning] Add invalid command',
  props<{ command: string }>()
);
