import { Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeamPlayersComponent } from './team-players/team-players.component';
import { PlayerTeamComponent } from './player-team/player-team.component';
import { LoginComponent } from './auth/login.component';

export const routes: Routes = [
    {path:"teams", component:TeamComponent},
    {path:"players", component:PlayerComponent},
    {path:"nav-bar", component:NavBarComponent},
    {path:"team-players/:id", component:TeamPlayersComponent},
    {path:"player-team", component:PlayerTeamComponent},
    {path:"player-team/:id", component:PlayerTeamComponent},
    {path:"login", component:LoginComponent},
    {path:"", component:TeamComponent, pathMatch:"full"}
];
