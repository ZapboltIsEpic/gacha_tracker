import { Component, ChangeDetectionStrategy } from '@angular/core';
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
      <div *ngIf="personalisedServant===''">
        <h1>Servants</h1>
        <table>
          <tr *ngFor="let servant of servants; trackBy: trackByServant">
            <td [class]="servantBox" (click)="getPersonalisedServant(servant.name)">
              <img src="{{ servant.image }}" height = 222px width =130px>
            </td>
            <td>
              {{ servant.name }} 
            </td>
          </tr>
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
  constructor(private router: Router, private http: HttpClient, private localStorageService : LocalStorageService) {}

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
