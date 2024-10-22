import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { HomepageComponent } from './homepage/homepage.component';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, MatSidenavModule, HomepageComponent, CommonModule],
  template: `
    <mat-sidenav #sidenav mode="side" closed>
      <app-sidebar></app-sidebar>
    </mat-sidenav>
    <app-navbar [sidenav]="sidenav"></app-navbar>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
}
