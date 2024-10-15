import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Games } from '../shared/models/games';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="homepage">
      <h1>Welcome to {{title}}!</h1>
      <span>
        <ul>
          <li *ngFor="let game of games">
            <a routerLink = "/game/{{game.id}}"></a>
            {{game.name}}
            <img [src]="game.image" width="100" height="100">
          </li>
        </ul>
      </span>
    </div>
  `,
  styleUrls: ['homepage.component.css']
})
export class HomepageComponent {
  title = 'Gacha Tracker';
  games:Games[] = [];
  constructor(private gamesService:GamesService) {
    this.games = this.gamesService.getAllGames();
    console.log(this.games);
  }
}
