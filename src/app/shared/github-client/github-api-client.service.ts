import { environment } from '../../../environments/environment';
import { RequestOptionsArgs } from '@angular/http/src/interfaces';
import { RequestOptions } from 'https';
import { Observable } from 'rxjs/Rx';
import { GitHubRepository } from './github-repo';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class GithubApiClientService {

  private readonly requestArgs: RequestOptionsArgs;

  constructor(private http: Http) {
    const auth = `${environment.ghUserName}:${environment.ghToken}`;
    this.requestArgs = { headers: new Headers({
      // 'User-Agent': environment.ghUserName,
      // 'Authorization': `${window.btoa(auth)}`
    })};
  }

  loadUserRepositories(username: string): Observable<GitHubRepository[]> {
    return this.http.get(`https://api.github.com/users/${username}/repos?type=all`, this.requestArgs)
    .map(response => {
      if (response.status === 200) {
        return response.json() as GitHubRepository[];
      } else {
        console.warn(`Error getting ${username} repos`, response);
        throw response;
      }
    });
  }

}
