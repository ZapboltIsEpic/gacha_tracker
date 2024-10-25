import { Routes } from '@angular/router';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FategrandorderhomepageComponent } from './pages/fategrandorder/fategrandorderhomepage/fategrandorderhomepage.component';

export const routes: Routes = [
    { path: 'signin', component: SigninpageComponent},
    { path: '', component: HomepageComponent},
    { path: 'game/fate grand order', component: FategrandorderhomepageComponent}
];
