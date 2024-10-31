import { Routes } from '@angular/router';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FategrandorderhomepageComponent } from './pages/fategrandorder/fategrandorderhomepage/fategrandorderhomepage.component';
import { ServantsComponent } from './pages/fategrandorder/servants/servants.component';
import { CraftEssencesComponent } from './pages/fategrandorder/craft-essences/craft-essences.component';

export const routes: Routes = [
    { path: 'signin', component: SigninpageComponent},
    { path: '', component: HomepageComponent},
    { path: 'game/fate grand order', component: FategrandorderhomepageComponent},
    { path: 'game/fate grand order/servants', component: ServantsComponent},
    { path: 'game/fate grand order/craft essences', component: CraftEssencesComponent}
];
