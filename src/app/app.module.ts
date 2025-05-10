import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { StoreExampleComponent } from './containers/store-example/store-example.component';
import { StoreConsumerOneComponent } from './components/store-consumer-one/store-consumer-one.component';
import { StoreConsumerTwoComponent } from './components/store-consumer-two/store-consumer-two.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './features/counter/counter.reducer';
import { rootReducer } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './features/counter/counter.effects';
import { StoreUpdaterProjectPlanningComponent } from './components/store-updater-project-planning/store-updater-project-planning.component';
import { StoreConsumerProjectPlanningComponent } from './components/store-consumer-project-planning/store-consumer-project-planning.component';
import { MatOptionModule } from '@angular/material/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { projectPlanningReducer } from './features/project-planning/project-planning.reducer';
import { ProjectPlanningEffects } from './features/project-planning/project-planning.effects';
import { PlanningExampleComponent } from './containers/planning-example/planning-example.component';
import { QuestionsExampleComponent } from './containers/questions-example/questions-example.component';
import { QuestionSpawnerComponent } from './components/question-spawner/question-spawner.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreExampleComponent,
    StoreConsumerOneComponent,
    StoreConsumerTwoComponent,
    StoreUpdaterProjectPlanningComponent,
    StoreConsumerProjectPlanningComponent,
    PlanningExampleComponent,
    QuestionsExampleComponent,
    QuestionSpawnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatDividerModule,
    MatOptionModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatChipsModule,
    MatListModule,
    StoreModule.forRoot({ app: rootReducer }),
    StoreModule.forFeature('counter', counterReducer),
    StoreModule.forFeature('projectPlanning', projectPlanningReducer),
    EffectsModule.forRoot([CounterEffects]),
    EffectsModule.forRoot([ProjectPlanningEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
