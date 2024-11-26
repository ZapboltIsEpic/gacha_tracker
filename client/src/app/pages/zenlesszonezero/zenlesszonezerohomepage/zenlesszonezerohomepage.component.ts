import { Component } from '@angular/core';
import { LocalStorageService } from '../../../local-storage.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zenlesszonezerohomepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div [class] ="homepage">
      <div [class] ="zenlesszonezerohomepage" *ngIf="isString(retrieveFromLocalStorage('loggedIn'))">
        <a [class]="homepagebox" [routerLink]="['agents']">
          Agents
          <img src="zzz-agent.jpg" height = 222px width =130px>
        </a>
        <a [class]="homepagebox" [routerLink]="['w engines']">
          W Engines
          <img src="zzz-w-engine.jpg" height = 222px width =130px>
        </a>
      </div>
      <div [class] ="zenlesszonezerohomepage" div *ngIf="retrieveFromLocalStorage('loggedIn') === null">
        This is ZZZ Homepage. Please Sign In to continue.
      </div>
    </div>
  `,
  styleUrls: [`../../../homepage/homepage.component.css`, `zenlesszonezerohomepage.component.css`]
})
export class ZenlesszonezerohomepageComponent {
  constructor(private localStorageService : LocalStorageService, ) {}

  zenlesszonezerohomepage = 'zenlesszonezerohomepage';
  homepage = 'homepage';
  homepagebox = 'homepagebox';

  retrieveFromLocalStorage(key: string): string | null {
    const value = this.localStorageService.getItem(key);
    console.log(`Retrieved ${key} from local storage: ${value}`);
    return value;
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }

}
