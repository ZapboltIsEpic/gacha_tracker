import { Component, Input } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, SearchbarComponent, MatButtonModule, MatIconModule, MatSidenav],
  template: `
    <mat-toolbar [class]="navbar">
      <div [class]="titleandlogo">
        <button mat-icon-button (click)="sidenav.toggle()">
          <mat-icon [class]="menuicon">menu</mat-icon>
        </button>
        <span>Gacha Tracker</span>
      </div>
      <app-searchbar></app-searchbar>
      <button mat-button [id]="signinbutton" (click)="navigateToSignIn()">Sign In</button>
    </mat-toolbar>
  `,
  styleUrls: ['navbar.component.css', 'searchbar/searchbar.component.css']
})
export class NavbarComponent {
  signinbutton = 'signinbutton';
  menuicon = 'menuicon';
  titleandlogo = 'titleandlogo';
  navbar = 'navbar';
  searchbar = 'searchbar';
  @Input() sidenav!: MatSidenav;
  constructor(private router: Router) {}

  navigateToSignIn() {
    this.router.navigate(['/signin']);
  }
}
