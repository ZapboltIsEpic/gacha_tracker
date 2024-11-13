import { Component, Input, Output, EventEmitter} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div [class]="searchbar">
      <input type="text" [class]="searchbox" placeholder="Search" (input)="onInputChange($event)">
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
  @Output() searchTermChanged = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.searchTermChanged.emit(searchTerm); // Emit the search term to the parent
  }
} 
