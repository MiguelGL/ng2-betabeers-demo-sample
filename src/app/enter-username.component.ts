import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'enter-username.component.html'
})
export class EnterUsernameComponent {

  model = {username: ''};

  constructor(private route: ActivatedRoute, private router: Router) {}

  get submitDisabled() {
    return this.model.username.length === 0;
  }

  performUsernameSearch() {
    this.router.navigateByUrl(`/user/${this.model.username}`);
  }
}
