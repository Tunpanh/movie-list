import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

const routes: Routes = [
  { path: 'movie-list', component: MoviesListComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '/movie-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
