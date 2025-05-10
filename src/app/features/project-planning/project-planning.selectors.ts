import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PlannedResource, Project, ProjectPlanningState } from "./project-planning.state";

export const selectProjectPlanningState = createFeatureSelector<ProjectPlanningState>('projectPlanning');

export const selectMembers = createSelector(
  selectProjectPlanningState,
  (state: ProjectPlanningState) => state.members
);

export const selectProjects = createSelector(
  selectProjectPlanningState,
  (state: ProjectPlanningState) => state.projects
);

export const selectPlannedResources = createSelector(
  selectProjectPlanningState,
  (state: ProjectPlanningState) => state.plannedResources
);

export const selectRanCommands = createSelector(
  selectProjectPlanningState,
  (state: ProjectPlanningState) => state.ranCommands
);

export interface ProjectPlanningStatus {
  name: string;
  totalTime: number;
  plannedResources: PlannedResource[];
  remainingTimeToPlan: number;
  plannedTime: number;
}

export const selectMembersAndTheirPlannedResources = createSelector(
  selectMembers,
  selectPlannedResources,
  (members, plannedResources) => {
    const membersAndTheirPlannedResources: { memberName: string, plannedResources: PlannedResource[] }[] = [];
    members.forEach((member) => {
      const memberPlannedResources = plannedResources.filter((plannedResource) => plannedResource.member.name === member.name);
      membersAndTheirPlannedResources.push({
        memberName: member.name,
        plannedResources: memberPlannedResources,
      });
    });
    return membersAndTheirPlannedResources;
  }
);

export const selectProjectsPlanningStatus = createSelector(
  selectProjectPlanningState,
  (state: ProjectPlanningState) => {
    const projectsPlanningStatus: ProjectPlanningStatus[] = [];
    state.projects.forEach((project) => {
      const plannedResources = state.plannedResources.filter((plannedResource) => plannedResource.project.name === project.name);
      const remainingTimeToPlan = project.neededTime - plannedResources.reduce((totalTime, plannedResource) => totalTime + plannedResource.time, 0);
      const plannedTime = project.neededTime - remainingTimeToPlan;
      projectsPlanningStatus.push({
        name: project.name,
        totalTime: project.neededTime,
        plannedResources,
        remainingTimeToPlan,
        plannedTime,
      });
    });
    return projectsPlanningStatus;
  }
);
