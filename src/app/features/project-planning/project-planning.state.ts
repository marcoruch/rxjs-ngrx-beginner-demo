export interface ProjectMember {
  name: string;
  availableTime: number;
}

export interface Project {
  name: string;
  neededTime: number;
}

export interface PlannedResource {
  project: Project;
  member: ProjectMember;
  time: number;
}

export interface ProjectPlanningState {
  members: ProjectMember[];
  projects: Project[];
  plannedResources: PlannedResource[];
  ranCommands: { command: string, valid: boolean }[];
}

export const initialProjectPlanningState: ProjectPlanningState = {
  ranCommands: [],
  members: [
    { name: 'John', availableTime: 100 },
    { name: 'Jane', availableTime: 100 },
    { name: 'Jack', availableTime: 100 },
    { name: 'Jill', availableTime: 100 },
  ],
  projects: [
    { name: 'Project-1', neededTime: 50 },
    { name: 'Project-2', neededTime: 50 },
    { name: 'Project-3', neededTime: 50 },
    { name: 'Project-4', neededTime: 50 },
  ],
  plannedResources: [],
};
