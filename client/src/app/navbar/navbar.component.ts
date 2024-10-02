import { Component } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, SearchbarComponent, MatButtonModule],
  template: `
    <mat-toolbar [class] = "navbar">
      <span>Gacha Tracker</span>
      <app-searchbar [class] = "searchbar"></app-searchbar>
      <button mat-button>Sign In</button>
    </mat-toolbar>
  `,
  styleUrls: ['navbar.component.css', 'searchbar/searchbar.component.css']
})
export class NavbarComponent {
  navbar = 'navbar';
  searchbar = 'searchbar';
}
