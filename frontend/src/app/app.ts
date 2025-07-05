import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
  <app-header />
  <main>
    <router-outlet/>
  </main>
  `,
  styles: [
    `
      main {
        padding: 16px;
      }
    `
  ],
})
export class App {
  protected title = 'frontend';
}
