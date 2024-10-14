import { Routes } from '@angular/router';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    { path: 'signin', component: SigninpageComponent},
    { path: '', component: HomepageComponent}
];
