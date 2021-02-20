import { Component, OnInit } from '@angular/core';

import { Request } from '../request';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent  {

  methods = ['GET', 'POST', 'PUT', 'DELETE', 'INFO'];
  model = new Request(this.methods[0], 'www.yoursite.com', '/home/index.php');

  testdate = formatDate(new Date(), 'dd MMMM yyyy', 'en');

  responses = [
    {
      code: 200,
      date: this.testdate,
      server: 'Apache/2.2.14 (Win32)',
      description: 'Everything is fine!'
    },
    {
      code: 202,
      date: this.testdate,
      server: 'Apache/2.2.14 (Win32)',
      description: 'Accepted!'
    },
    {
      code: 404,
      date: this.testdate,
      server: 'Apache/2.2.14 (Win32)',
      description: "Ops, there's no trace of that!"
    },
    {
      code: 400,
      date: this.testdate,
      server: 'Apache/2.2.14 (Win32)',
      description: "Sorry, that was a bad one!"
    },
    {
      code: 302,
      location: 'location: /newpage.php',
      server: 'Apache/2.2.14 (Win32)',
      code2: 200,
      date2: this.testdate,
      server2: 'Apache/2.2.14 (Win32)',
      description: "Someone's moved!"
    }
  ];

  randomResponse = this.responses[Math.floor(Math.random() * this.responses.length)];

  submitted = false; //var d'appoggio
  result = true;
  onSubmit() {
    this.submitted = true;
    this.result = false;
    
    const newrresp = this.responses[Math.floor(Math.random() * this.responses.length)];
    this.randomResponse = newrresp;
    return this.randomResponse;
  }


  // newRequest() {
  // this.model = new Request(2, '', '');
  // }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
