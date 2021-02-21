import { Component } from '@angular/core';

import { Request } from '../request';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss'],
})

export class RequestFormComponent  {

  methods = ['GET', 'POST', 'PUT', 'DELETE', 'INFO'];
  model = new Request(this.methods[0], 'www.yoursite.com', '/home/index.php');

  testdate = formatDate(new Date(), 'dd MMMM yyyy', 'en');

  responses = [
    {
      code: 200,
      color: 'green',
      date: this.testdate,
      server: 'Apache/2.2.14 (Win32)',
      description: 'Everything is fine!'
    },
    {
      code: 202,
      color: 'green',
      date: this.testdate,
      server: 'Apache/2.2.14 (Win32)',
      description: 'Accepted!'
    },
    {
      code: 404,
      color: 'red',
      date: this.testdate,
      server: 'Apache/2.2.14 (Win32)',
      description: "Ops, there's no trace of that!"
    },
    {
      code: 400,
      color: 'red',
      date: this.testdate,
      server: 'Apache/2.2.14 (Win32)',
      description: "Sorry, that was a bad one!"
    },
    {
      code: 302,
      color: 'orange',
      location: 'location: /newpage.php',
      server: 'Apache/2.2.14 (Win32)',
      code2: 200,
      date2: this.testdate,
      server2: 'Apache/2.2.14 (Win32)',
      description: "Someone's moved!"
    }
  ];

  randomResponse = this.responses[Math.floor(Math.random() * this.responses.length)];

  submitted = false;
  result = true;
  onSubmit() {
    this.submitted = true;
    this.result = false;

    const newresp = this.responses[Math.floor(Math.random() * this.responses.length)];
    this.randomResponse = newresp;
    return this.randomResponse;
  }

  // ngx-gauge lib for gauge chart
  gaugeType = "arch";
  gaugeValue = 80;
  gaugeLabel = "Page Load 0.4s";
  gaugeAppendText = " Great!";
  gaugeCap = "round";
  gaugeThick = 10;
  gaugethresholdConfig = {
    '0': {color: 'red'},
    '40': {color: 'orange'},
    '75.5': {color: 'green'}
  };

  // for stats collapse (bootstrap)
  public isCollapsed = true;



}
