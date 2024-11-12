import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../../../local-storage.service';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from '../../../navbar/searchbar/searchbar.component';
import { DataService } from '../../../services/data.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-servants',
  standalone: true,
  imports: [CommonModule, SearchbarComponent],
  template: `
    <div [class]="homepage">
      <div *ngIf="personalisedServant===''">
        <h1>Servants</h1>
        <div [class]="row">
          <span><img alt="saber class icon" title="Saber" src="https://static.atlasacademy.io/JP/ClassIcons/class2_1.png" width="37" height="37"></span>
        </div>
        <app-searchbar></app-searchbar>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Image</th>
              <th>Name</th>
              <th>Rarity</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!servants || !servants.length">
              <td colspan="4">Loading...</td>
            </tr>
            <tr *ngFor="let servant of servants; trackBy: trackByServant">
              <td>{{servant.class}}</td>
              <td (click)="getPersonalisedServant(servant.name)">
                <img src="{{ servant.image }}" height = 222px width =130px>
              </td>
              <td>
                {{ servant.name }} 
              </td>
              <td>
                {{ servant.rarity }} 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div *ngIf="personalisedServant!=''">
        <div>
          personalised servant: {{ personalisedServant }}
        </div>
        <button (click)="getPersonalisedServant('')">Back</button>
      </div>
    </div>
  `,
  styleUrls: ['./servants.component.css', '../fategrandorderhomepage/fategrandorderhomepage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServantsComponent {
  row = 'row';
  homepage = 'homepage';
  servants: any[] = [];
  servantBox = 'servantBox';
  personalisedServant = '';
  
  trackByServant(index: number, servant: any): string {
    return servant.name;
  }

  getPersonalisedServant(servant: string): void {
    console.log('Personalised servant:', servant);
    this.personalisedServant = servant;
  }

  // add personalised servants 
  constructor(private router: Router, private dataService : DataService, private localStorageService : LocalStorageService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getServants();
  }

  getServants(): void {
    this.dataService.getData('http://localhost:3000/api/gachatracker/fgo/servants/get/all')
      .subscribe((data: any) => {
        this.servants = data;
        this.cd.detectChanges();
        console.log('Servants:', this.servants);
      }, (error) => {
        console.error('Error fetching servants:', error);
      });
  }
}
