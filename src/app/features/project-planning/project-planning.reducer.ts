import { Action, createReducer, on } from '@ngrx/store';
import * as ProjectPlanningActions from './project-planning.actions';
import { PlannedResource, ProjectPlanningState, initialProjectPlanningState } from './project-planning.state';

const _projectPlanningReducer = createReducer(
  initialProjectPlanningState,
  on(ProjectPlanningActions.addMember, (state, { name, availableTime }): ProjectPlanningState => ({
    ...state,
    members: [...state.members, { name, availableTime }],
    ranCommands: [...state.ranCommands, { command: `add-member ${name} ${availableTime}`, valid: true }],
  })),
  on(ProjectPlanningActions.removeMember, (state, { name }): ProjectPlanningState => ({
    ...state,
    members: state.members.filter(member => member.name !== name),
    plannedResources: state.plannedResources.filter(plannedResource => plannedResource.member.name !== name),
    ranCommands: [...state.ranCommands, { command:  `remove-member ${name}`, valid: true }],
  })),
  on(ProjectPlanningActions.resetAll, state => ({
    ...state,
    members: initialProjectPlanningState.members,
    projects: initialProjectPlanningState.projects,
    plannedResources: initialProjectPlanningState.plannedResources,
    ranCommands: [],
  })),
  on(ProjectPlanningActions.assignMember, (state, { projectName, memberName, time }): ProjectPlanningState => ({
    ...state,
    plannedResources: [...state.plannedResources, {
      project: state.projects.find(project => project.name === projectName),
      member: state.members.find(member => member.name === memberName),
      time: time,
    } as PlannedResource],
    ranCommands: [...state.ranCommands, { command:  `assign-member ${projectName} ${memberName}`, valid: true }],
  })),
  on(ProjectPlanningActions.addProject, (state, { name, neededTime }): ProjectPlanningState => ({
    ...state,
    projects: [...state.projects, { name, neededTime }],
    ranCommands: [...state.ranCommands,  { command: `add-project ${name} ${neededTime}`, valid: true }],
  })),
  on(ProjectPlanningActions.removeProject, (state, { name }): ProjectPlanningState => ({
    ...state,
    projects: state.projects.filter(project => project.name !== name),
    ranCommands: [...state.ranCommands, { command:  `remove-project ${name}`, valid: true }],
  })),
  on(ProjectPlanningActions.addInvalidCommand, (state, { command }): ProjectPlanningState => ({
    ...state,
    ranCommands: [...state.ranCommands, { command, valid: false }],
  })),
);

export function projectPlanningReducer(state: ProjectPlanningState | undefined, action: Action) {
  return _projectPlanningReducer(state, action);
}
