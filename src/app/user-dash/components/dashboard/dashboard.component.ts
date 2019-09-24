import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  sideOpened = true;
  dateTime: string;

  constructor(
    private router: Router
  ) {
    // init outlet route
    router.navigate(['/user-dash/sell']);
  }

  ngOnInit() {
    interval(1000)
      .pipe(
        map(e => {
          this.dateTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss A');
        })
      ).subscribe();
  }

  logout() {
    this.router.navigate(['']);
  }
}
