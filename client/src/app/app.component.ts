import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, MatSidenavModule],
  template: `
    <mat-sidenav #sidenav mode="side" closed>
      <app-sidebar></app-sidebar>
    </mat-sidenav>
    <app-navbar [sidenav]="sidenav"></app-navbar>
    <h1>Welcome to {{title}}!</h1>
      <span>
        @for (game of games; track game.id) {
          {{game.name}}
        }
      </span>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Gacha Tracker';
  games = [{id: 0, name: 'genshin-impact'}, {id: 1, name: 'arknights'}, {id: 2, name: 'fgo'}];
  @ViewChild('sidenav') sidenav!: MatSidenav;
}
