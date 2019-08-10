import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';
import * as advancedFormat from 'dayjs/plugin/advancedFormat';

@Component({
  selector: 'app-dashboard',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminDashboardComponent implements OnInit {
  sideOpened = true;
  dateTime: string;

  constructor(private router: Router) {
    dayjs.extend(advancedFormat);
    // init outlet route
    router.navigate(['/admin-dash/reports']);
  }

  ngOnInit() {
    setInterval(() => {
      this.dateTime = dayjs().format('dddd, MMMM Do YYYY, h:mm:ss A');
    }, 1000);
  }

  logout() {
    this.router.navigate(['']);
  }
}