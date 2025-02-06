import { Routes } from '@angular/router';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FategrandorderhomepageComponent } from './pages/fategrandorder/fategrandorderhomepage/fategrandorderhomepage.component';
import { ServantsComponent } from './pages/fategrandorder/servants/servants.component';
import { CraftEssencesComponent } from './pages/fategrandorder/craft-essences/craft-essences.component';
import { ZenlesszonezerohomepageComponent } from './pages/zenlesszonezero/zenlesszonezerohomepage/zenlesszonezerohomepage.component';
import { AgentsComponent } from './pages/zenlesszonezero/agents/agents.component';

export const routes: Routes = [
    { path: 'signin', component: SigninpageComponent},
    { path: '', component: HomepageComponent},

    // GAMES
    // fate grand order
    { path: 'game/fate grand order', component: FategrandorderhomepageComponent},
    { path: 'game/fate grand order/servants', component: ServantsComponent},
    { path: 'game/fate grand order/craft essences', component: CraftEssencesComponent},

    // zenless zone zero
    { path: 'game/zenless zone zero', component: ZenlesszonezerohomepageComponent},
    { path: 'game/zenless zone zero/agents', component: AgentsComponent},
];
