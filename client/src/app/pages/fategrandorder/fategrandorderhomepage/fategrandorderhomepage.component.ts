import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from '../../../local-storage.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-fategrandorderhomepage',
    standalone: true,
    imports: [CommonModule, MatButtonModule, RouterModule],
    template: `
      <div [class] ="homepage" *ngIf="isString(retrieveFromLocalStorage('loggedIn'))">
        <a [class]="homepagebox" [routerLink]="['/game/fate grand order/servants']">
          Servants
          <img src="fgo-servant.jpg" height = 222px width =130px>
        </a>
        <a [class]="homepagebox" [routerLink]="['/game/fate grand order/craft essences']">
          Craft Essences
          <img src="fgo-craft-essence.jpg" height = 222px width =130px>
        </a>
      </div>
      <div [class] ="homepage" div *ngIf="retrieveFromLocalStorage('loggedIn') === null">
        This is FGO Homepage. Please Sign In to continue.
      </div>
      
    `,
    styleUrls: [`fategrandorderhomepage.component.css`]
  })
  export class FategrandorderhomepageComponent {
    homepage = 'homepage';
    homepagebox = 'homepagebox';
    constructor(private localStorageService: LocalStorageService, private router : Router) {}

    retrieveFromLocalStorage(key: string): string | null {
      const value = this.localStorageService.getItem(key);
      console.log(`Retrieved ${key} from local storage: ${value}`);
      return value;
    }
  
    isString(value: any): boolean {
      return typeof value === 'string';
    }

    navigate(value: string) {
      this.router.navigate([value]);
      console.log(`Navigating to ${value}`);
    }
  }
  