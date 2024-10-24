import { Component } from '@angular/core';
import { Games } from '../shared/models/games';
import { GamesService } from '../services/games.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  template: `
    <div [class]="sidebar">
      <div [id] = "title">
        <span>Gacha Tracker</span>
      </div>
      <div [id] = "gameSection">
        <span>Games</span>
        <div *ngFor="let game of games">
          <button mat-button [class] = "gameItem" (click)="navigateToGamePage(game.name)">
            <img [src]="game.image" width="24" height="24">
            <a routerLink = "/game/{{game.id}}"></a>
            {{game.name}}
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent {
  gameItem = 'gameItem';
  sidebar = 'sidebar';
  title = 'title';
  gameSection = 'gameSection';
  games:Games[] = [];
  constructor(private gamesService:GamesService, private router: Router) {
    this.games = this.gamesService.getAllGames();
    console.log(this.games);
    
  }

  navigateToGamePage(gameName: string) {
    this.router.navigate(['/games/' + gameName]);
  }
}
