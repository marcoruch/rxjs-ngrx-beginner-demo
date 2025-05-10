import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, interval, map, scan, share, takeUntil } from 'rxjs';

@Component({
  selector: 'app-stream-of-consciousness',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './stream-of-consciousness.component.html',
  styleUrls: ['./stream-of-consciousness.component.scss'],
})
export class StreamOfConsciousnessComponent {
  // thoughts array, thoughts are short thoughts, completely random
  possibleThoughts: string[] = [
    'I wonder what I should do next?',
    'I should probably do something.',
    'I should probably do something else.',
    'What if I tried something new today?',
    'Maybe I should call a friend.',
    'What’s happening in the world right now?',
    'I wonder how I can improve my skills.',
    'Is there something I’ve been procrastinating on?',
    'What was that song stuck in my head earlier?',
    'I should probably get more exercise.',
    'It might be nice to read a book right now.',
    'I’m curious about learning a new language.',
    'Maybe I should plan a small trip somewhere.',
    'I wonder what’s for dinner tonight.',
    'Should I start a new hobby?',
    'I need to remember to buy groceries.',
    'What are my goals for this week?',
    'Is there a movie I’ve been wanting to watch?',
    'How can I be more productive with my time?',
    'I wonder what the weather will be like tomorrow.',
    'Should I take a short nap?',
    'What’s the latest trend on social media?',
    'Maybe I should write in my journal.',
    'I wonder how my family is doing.',
    'I should probably drink more water.',
    'What are some good gift ideas for friends?',
    'I could experiment with cooking a new recipe.',
    'How can I decorate my room to look better?',
    'I should check if there are any new interesting podcasts.',
    'What are the latest technological advancements?',
  ];

  isThinking = new BehaviorSubject<boolean>(false);
  thinkingDots$ = interval(1000).pipe(map((i) => '.'.repeat((i % 3) + 1)));

  thoughts$ = interval(3000).pipe(
    scan((acc, curr) => {
      if (this.isThinking.value) {
        const thoughtIndex = Math.floor(
          Math.random() * this.possibleThoughts.length
        );
        acc.push(this.possibleThoughts[thoughtIndex]);
      }
      return acc;
    }, [] as string[]),
    share()
  );

  anyThoughtIsAQuestion$ = this.thoughts$.pipe(
    map((thoughts) => thoughts.some((thought) => thought.includes('?')))
  );

  anyThoughtIsADecision$ = this.thoughts$.pipe(
    map((thoughts) => thoughts.some((thought) => thought.includes('should') && !thought.endsWith('?')))
  );


  switchThoughts() {
    this.isThinking.next(!this.isThinking.value);
  }
}
