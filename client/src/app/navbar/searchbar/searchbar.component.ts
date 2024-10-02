import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  template: `
    <p>
      <input placeholder="Search">
    </p>
  `,
  styles: ``
})
export class SearchbarComponent {
  // @Input() games: any;
} 
