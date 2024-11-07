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
      <h2>Gacha tracker provides game progression tracking for the games currently listed below</h2>
      <div [id]="maincontent">
        <div [class]="maincontentbox" *ngFor="let game of games">
          <a [class]="textunderlineoff" [routerLink]="['/game/', formatGameName(game.name)]">
            <app-game-box [name]="game.name" [image]="game.image"></app-game-box>
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['homepage.component.css']
})

export class HomepageComponent {
  maincontentbox = 'maincontentbox';
  textunderlineoff='textunderlineoff';
  maincontent = 'maincontent';
  title = 'Gacha Tracker';
  games:Games[] = [];
  constructor(private gamesService:GamesService) {
    this.games = this.gamesService.getAllGames();
    console.log(this.games);
  }

  formatGameName(name: string): string {
    return name.toLowerCase().replace(/\//g, ' ').replace(/:/g, '');
  }
}
