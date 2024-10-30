import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from '../../../local-storage.service';

@Component({
    selector: 'app-fategrandorderhomepage',
    standalone: true,
    imports: [CommonModule],
    template: `
      <div class ="homepage">
        <div *ngIf="isString(retrieveFromLocalStorage('loggedIn'))">
          Welcome to FGO Homepage. You are logged in.
        </div>
        <div *ngIf="retrieveFromLocalStorage('loggedIn') === null">
          This is FGO Homepage. Please Sign In to continue.
        </div>
      </div>
      
    `,
    styleUrls: [`fategrandorderhomepage.component.css`]
  })
  export class FategrandorderhomepageComponent {
    constructor(private localStorageService: LocalStorageService) {}

    retrieveFromLocalStorage(key: string): string | null {
      const value = this.localStorageService.getItem(key);
      console.log(`Retrieved ${key} from local storage: ${value}`);
      return value;
    }
  
    isString(value: any): boolean {
      return typeof value === 'string';
    }
  }
  