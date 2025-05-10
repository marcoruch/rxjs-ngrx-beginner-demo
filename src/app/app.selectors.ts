import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

export const selectRootState = (state: AppState) => state;
