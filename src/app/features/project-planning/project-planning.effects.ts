import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { addMember, addProject, assignMember, removeMember, removeProject, resetAll } from './project-planning.actions';

@Injectable()
export class ProjectPlanningEffects {

  addMember$ = createEffect(() => this.actions$.pipe(
    ofType(addMember),
    tap(({ name }) => this.snackBar.open(`Added member ${name}`, 'OK', { duration: 2000 }))
  ), { dispatch: false });

  removeMember$ = createEffect(() => this.actions$.pipe(
    ofType(removeMember),
    tap(({ name }) => this.snackBar.open(`Removed member ${name}`, 'OK', { duration: 2000 }))
  ), { dispatch: false });

  resetAll$ = createEffect(() => this.actions$.pipe(
    ofType(resetAll),
    tap(() => this.snackBar.open(`Reset all`, 'OK', { duration: 2000 }))
  ), { dispatch: false });

  assignMember$ = createEffect(() => this.actions$.pipe(
    ofType(assignMember),
    tap(({ projectName, memberName, time }) => this.snackBar.open(`Assigned member ${memberName} to project ${projectName} with ${time} hours`, 'OK', { duration: 2000 }))
  ), { dispatch: false });

  addProject$ = createEffect(() => this.actions$.pipe(
    ofType(addProject),
    tap(({ name }) => this.snackBar.open(`Added project ${name}`, 'OK', { duration: 2000 }))
  ), { dispatch: false });

  removeProject$ = createEffect(() => this.actions$.pipe(
    ofType(removeProject),
    tap(({ name }) => this.snackBar.open(`Removed project ${name}`, 'OK', { duration: 2000 }))
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private snackBar: MatSnackBar
  ) {}
}
