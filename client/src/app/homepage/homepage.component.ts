import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Games } from '../shared/models/games';
import { GamesService } from '../services/games.service';
import { GameBoxComponent } from '../components/game-box/game-box.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule, GameBoxComponent],
  template: `
    <div class="homepage">
      <h1>Welcome to {{title}}!</h1>
      <div [id]="maincontent">
        <div *ngFor="let game of games">
          <a [routerLink]="['/game/', game.name]">
            <app-game-box [name]="game.name" [image]="game.image"></app-game-box>
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['homepage.component.css']
})

export class HomepageComponent {
  maincontent = 'maincontent';
  title = 'Gacha Tracker';
  games:Games[] = [];
  constructor(private gamesService:GamesService) {
    this.games = this.gamesService.getAllGames();
    console.log(this.games);
  }
}
