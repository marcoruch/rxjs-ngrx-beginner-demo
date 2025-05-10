import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMembers, selectMembersAndTheirPlannedResources, selectProjects, selectProjectsPlanningStatus } from 'src/app/features/project-planning/project-planning.selectors';

@Component({
  selector: 'app-store-consumer-project-planning',
  templateUrl: './store-consumer-project-planning.component.html',
  styleUrls: ['./store-consumer-project-planning.component.scss']
})
export class StoreConsumerProjectPlanningComponent {
  members$ = this.store.select(selectMembers);
  projects$ = this.store.select(selectProjects);
  membersAndTheirPlannedResources$ = this.store.select(selectMembersAndTheirPlannedResources);
  projectsPlanningStatus$ = this.store.select(selectProjectsPlanningStatus);
  constructor(readonly store: Store) { }
}
