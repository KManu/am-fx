import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';
import * as advancedFormat from 'dayjs/plugin/advancedFormat';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dateTime: string;

  constructor(
    public router: Router
  ) {
    dayjs.extend(advancedFormat);
    this.router.navigate(['/root-dash/organisations']);
  }

  ngOnInit() {
    setInterval((() => {
      this.dateTime = dayjs().format('dddd, MMMM Do YYYY, h:mm:ss A');
    }), 1000);
  }

  logout() {
    this.router.navigate(['']);
  }

}
