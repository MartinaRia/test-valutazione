import { Component, OnInit } from '@angular/core';

import { Request } from '../request';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent  {

  methods = ['GET', 'POST', 'PUT', 'DELETE', 'INFO'];

  model = new Request(1, this.methods[0], 'www.yoursite.com/home/index.php');

  beforesubmit = true;
  submitted = false; //var d'appoggio
  onSubmit() {
    this.submitted = true;
    this.beforesubmit = false;
  }

  // to clear the form call this funct on (click)
  // newHero() {
  // this.model = new Request(2, '', '');
  // }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
