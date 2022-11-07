import { NgModule } from '@angular/core';
import { AddPlayerComponent } from './add-player/add-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { ViewPlayersComponent } from './view-players/view-players.component';
import { ViewPlayerComponent } from './view-player/view-player.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'add', component: AddPlayerComponent },
  { path: 'update', component: UpdatePlayerComponent },
  { path: 'delete', component: DeletePlayerComponent },
  { path: 'view', component: ViewPlayersComponent },
  { path: 'view/:id', component: ViewPlayerComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
