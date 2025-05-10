import { Component } from '@angular/core';
import { Subscription, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-question-spawner',
  templateUrl: './question-spawner.component.html',
  styleUrls: ['./question-spawner.component.scss']
})
export class QuestionSpawnerComponent {
  buttons: { topPercent: number, leftPercent: number }[] = [];
  subscription: Subscription;
  constructor() {
    this.subscription = interval(500)
      .pipe(
        map(() => ({
          topPercent: Math.random() * 80,
          leftPercent: Math.random() * 80
        })),
      )
      .subscribe(position => {
        return this.buttons.push(position);
      });
  }

  onEnd(): void {
    this.subscription?.unsubscribe();
  }
}
