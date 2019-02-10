import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'ngx-moment';

@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrls: ['./dailies.component.scss']
})
export class DailiesComponent implements OnInit {

  rows = [];
  columns = [
    {
      name: 'Time',
      prop: 'time',
      pipe: { transform: this.datePipe},
      flexGrow: 1
    },
    {
      name: 'Type',
      prop: 'type',
      flexGrow: 1
    },
    {
      name: 'First Name',
      prop: 'firstNameControl',
      flexGrow: 1
    },
    {
      name: 'Last Name',
      prop: 'lastNameControl',
      flexGrow: 1
    },
    {
      name: 'ID Type',
      prop: 'IDTypeControl',
      flexGrow: 1
    },
    {
      name: 'ID Number',
      prop: 'IDNumberControl',
      flexGrow: 1
    },
    {
      name: 'Amount',
      prop: 'amountControl',
      flexGrow: 1
    },
    {
      name: 'First Name',
      prop: 'firstNameControl',
      flexGrow: 1
    },
  ];

  /* columns = [
    {
      name: 'Currency',
      prop: 'firstNameControl'
    },
    {
      name: 'Amount',
      prop: 'firstNameControl'
    },
    {
      name: 'Rate',
      prop: 'firstNameControl'
    },
    {
      name: 'Total',
      prop: 'firstNameControl'
    },
  ]; */

  /* IDNumberControl: "12345"
  IDTypeControl: "voters"
  amountControl: 12355
  currencyControl: "sar"
  firstNameControl: "Tester"
  lastNameControl: "Tesee"
  time: "2019-01-18T18:35:52+00:00"
  type: "purchase" */

  constructor(
    private localStorage: LocalStorage,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.localStorage.getUnsafeItem('am-fx-records')
      .subscribe(
        next => {
          console.log('Records: ', next);
          this.rows = [...next];
        },
        error => {
          console.log('Error: ', error);
        }
      );
  }

  datePipe(value: any, ...args: any[]) {
    // return moment(value).toLocaleString();
    return new Date(value).toLocaleString('en-UK');
}



}
