import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  homeMessage = signal('Hello world!');

  keyUpHandler(event: KeyboardEvent) {
    console.log(`click click! ${event.key}`);
  }
}
