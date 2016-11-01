import { EnterUsernameComponent } from './enter-username.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from './repositories.component';
import { RouteNotFoundComponent } from './route-not-found.component';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/user'},
  { path: 'user', component: EnterUsernameComponent, children: [
    { path: '' },
    { path: ':username', component: RepositoriesComponent }
  ]},
  { path: '**', component: RouteNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
