import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <h1>Welcome to {{title}}!</h1>
      <span>
        @for (game of games; track game.id) {
          {{game.name}}
        }
      </span>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Gacha Tracker';
  games = [{id: 0, name: 'genshin-impact'}, {id: 1, name: 'arknights'}];
}
