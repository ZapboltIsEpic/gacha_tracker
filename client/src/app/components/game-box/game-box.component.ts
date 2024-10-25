import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-box',
  standalone: true,
  imports: [],
  template: `
    <div class="game-box">
      <img [src]="image" alt="{{ name }}" class="game-image"/>
      <p class="game-name">{{ name }}</p>
    </div>
  `,
  styleUrls: [`game-box.component.css`]
})
export class GameBoxComponent {
  @Input() name!: string;
  @Input() image!: string;
}
