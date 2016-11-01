import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubApiClientService } from './github-api-client.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    GithubApiClientService
  ],
  declarations: []
})
export class GithubClientModule { }
