import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminalWelcomeComponent } from './standalones/terminal-welcome/terminal-welcome.component';
import { CounterSubjectComponent } from './standalones/counter-subject/counter-subject.component';
import { StreamOfConsciousnessComponent } from './standalones/stream-of-consciousness/stream-of-consciousness.component';
import { StoreExampleComponent } from './containers/store-example/store-example.component';
import { PlanningExampleComponent } from './containers/planning-example/planning-example.component';
import { QuestionsExampleComponent } from './containers/questions-example/questions-example.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TerminalWelcomeComponent },
      { path: 'counter', component: CounterSubjectComponent },
      { path: 'stream-of-consciousness', component: StreamOfConsciousnessComponent },
      { path: 'shared-state', component: StoreExampleComponent },
      { path: 'extended-shared-state', component: PlanningExampleComponent },
      { path: 'questions', component: QuestionsExampleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
