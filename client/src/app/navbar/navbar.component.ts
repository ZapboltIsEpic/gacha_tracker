import { Component, Input } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, SearchbarComponent, MatButtonModule, MatIconModule, MatSidenav, CommonModule],
  template: `
    <mat-toolbar [class]="navbar">
      <div [class]="titleandlogo">
        <button mat-icon-button (click)="sidenav.toggle()">
          <mat-icon [class]="menuicon">menu</mat-icon>
        </button>
        <span>Gacha Tracker</span>
      </div>
      <app-searchbar></app-searchbar>
      <div *ngIf="retrieveFromLocalStorage('loggedIn') === null">
        <button mat-button [id]="signinbutton" (click)="navigateToSignIn()">Sign In</button>
      </div>
      <div *ngIf="retrieveFromLocalStorage('loggedIn') != null">
        <button mat-button [id]="signinbutton" (click)="navigateToSignOut()">Sign Out</button>
      </div>
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
  constructor(private router: Router, private localStorageService : LocalStorageService) {}

  retrieveFromLocalStorage(key: string): string | null {
    const value = this.localStorageService.getItem(key);
    console.log(`Retrieved ${key} from local storage: ${value}`);
    return value;
  }

  navigateToSignIn() {
    this.router.navigate(['/signin']);
  }

  navigateToSignOut() {
    this.localStorageService.removeItem('loggedIn');
    this.router.navigate(['/']);
  }
}
