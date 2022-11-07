import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SpokenLanguagesComponent } from './spoken-languages/spoken-languages.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'spoken', component: SpokenLanguagesComponent },
  { path: 'programming', component: ProgrammingLanguagesComponent },
  { path: '', redirectTo: 'programming', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
