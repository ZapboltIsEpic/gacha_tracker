import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div [class]="searchbar">
      <input [class]="searchbox" placeholder="Search">
      <button mat-icon-button [id]="searchbutton">
        <mat-icon>search</mat-icon>
      </button>
    </div>
  `,
  styleUrls: ['searchbar.component.css']
})
export class SearchbarComponent {
  searchbar = 'searchbar';
  searchbutton = 'searchbutton';
  searchbox = 'searchbox';
  @Input() games: any;
} 
