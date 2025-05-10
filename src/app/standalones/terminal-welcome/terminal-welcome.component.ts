import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, scan, takeUntil } from 'rxjs';

@Component({
  selector: 'app-terminal-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminal-welcome.component.html',
  styleUrls: ['./terminal-welcome.component.scss']
})
export class TerminalWelcomeComponent {
  lines$ = interval(1000).pipe(
    scan((acc, curr) => {
      acc.push(curr * 10);
      return acc;
    }, [] as Number[]),
    takeUntil(interval(1000 * 12))
  );
}
