import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrls: ['./dailies.component.scss']
})
export class DailiesComponent implements OnInit {


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

  exportAsExcel() {}
  loadTableData() {}



}
