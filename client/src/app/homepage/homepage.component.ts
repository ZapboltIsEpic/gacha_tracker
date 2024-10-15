import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  template: `
    <div class="homepage">
      <h1>Welcome to {{title}}!</h1>
      <span>
        @for (game of games; track game.id) {
          <div >
          {{game.name}}
          <img [src]="game.image" alt="{{game.name}}" width="200">
          </div>
        }
      </span>
    </div>
  `,
  styleUrls: ['homepage.component.css']
})
export class HomepageComponent {
  title = 'Gacha Tracker';
  games = [
    { id: 0, name: 'genshin impact', image: 'assets/genshin-impact.jpg' },
    { id: 1, name: 'zenless zone zero', image: 'assets/zenless-zone-zero.jpg' },
    { id: 2, name: 'fate grand order', image: 'assets/fate-grand-order.jpg' },
    { id: 3, name: 'honkai-star-rail', image: 'assets/honkai-star-rail.jpg' },
    { id: 4, name: 'dragon ball dokkan battle', image: 'assets/dragon-ball-dokkan-battle.jpg' },
    { id: 5, name: 'nikke goddess of victory', image: 'assets/nikke-goddess-of-victory.jpg' },
    { id: 6, name: 'azur lane', image: 'assets/azur-lane.jpg' },
  ];
}
