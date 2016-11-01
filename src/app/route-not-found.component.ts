import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
    <div class="alert alert-danger">
      <strong>Route Not Found</strong>
      Route '{{route.url | async}}' is unknown to this application.
      <a routerLink="/" class="alert-link">Back to Start</a>
    </div>
  `
})
export class RouteNotFoundComponent {

  constructor(private route: ActivatedRoute) {}

}
