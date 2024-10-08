import { Component, Input } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, SearchbarComponent, MatButtonModule, MatIconModule, MatSidenav],
  template: `
    <mat-toolbar [class] = "navbar">
      <button mat-icon-button (click)="sidenav.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
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
  @Input() sidenav!: MatSidenav;
}
