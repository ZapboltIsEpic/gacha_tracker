import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../../../local-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servants',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="homepage">
      <h1>Servants</h1>
      <div>
        <div *ngFor="let servant of servants">
          {{ servant.name }} 
          <img src="{{ servant.image }}" height = 222px width =130px>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./servants.component.css', '../fategrandorderhomepage/fategrandorderhomepage.component.css']
})
export class ServantsComponent {
  // add personalised servants and all servants in different tabs
  constructor(private router: Router, private http: HttpClient, private localStorageService : LocalStorageService) {}

  homepage = 'homepage';
  servants: any[] = [];

  ngOnInit(): void {
    this.getServants();
  }

  getServants(): void {
    this.http.get('http://localhost:3000/api/gachatracker/fgo/servants/get/all')
      .subscribe((data: any) => {
        this.servants = data;
        console.log('Servants:', this.servants);
      }, (error) => {
        console.error('Error fetching servants:', error);
      });
  }
}
