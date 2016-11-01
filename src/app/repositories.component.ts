import { Response } from '@angular/http';
import { GitHubRepository } from './shared/github-client/github-repo';
import { GithubApiClientService } from './shared/github-client/github-api-client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'repositories.component.html'
})
export class RepositoriesComponent implements OnInit {

  username = '';
  repos: GitHubRepository[] = [];

  loading = false;
  found = true;
  error = ''

  constructor(private route: ActivatedRoute,
              private gitHubClient: GithubApiClientService) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.onUsernameChange(params['username']));
  }

  private onUsernameChange(username: string): void {
    this.username = username;

    this.loading = true;
    this.found = true;
    this.error = '';

    this.repos = [];

    this.gitHubClient.loadUserRepositories(username)
    .subscribe(
      repos => this.repos = repos,
      error => {
        this.loading = false;
        if (error instanceof Response) {
          switch (error.status) {
            case 404:
              this.found = false;
              break;
            default:
              this.error = JSON.stringify(error);
          }
        } else {
          this.error = `${error}`;
        }
      },
      () => this.loading = false);
  }

}
