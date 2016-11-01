import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { EnterUsernameComponent } from './enter-username.component';
import { RepositoriesComponent } from './repositories.component';
import { RouteNotFoundComponent } from './route-not-found.component';
import { GithubApiClientService } from './shared/github-client/github-api-client.service';
import { GithubClientModule } from './shared/github-client/github-client.module';

@NgModule({
  declarations: [
    AppComponent, EnterUsernameComponent, RepositoriesComponent, RouteNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MomentModule,
    GithubClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
