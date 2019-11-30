import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionsService } from '../../../core/services/transactions.service';
import * as xlsx from 'xlsx';
import { LocalStorage, JSONSchema } from '@ngx-pwa/local-storage';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


interface Users {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  organisation_code: string;
  role: string;
  activated: string;
  created: Date;

}

const userSchema: JSONSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    email: { type: 'string' },
    organisation_code: { type: 'string' },
    role: { type: 'string' },
    activated: { type: 'string' },
    created: { type: 'string' },
  },
  required: ['id', 'first_name', 'last_name', 'email', 'organisation_code', 'role', 'activated', 'created']
};


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecordsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('tableWrapper', { static: true }) table: ElementRef;

  searchSubject: Subject<string> = new Subject();
  subs = new Subscription();

  data = [];
  dataSource = new MatTableDataSource<Transactions>();
  dataType = 'buy';
  loading: boolean;

  displayedColumns = [
    'full_name',
    'id_type',
    'id_number',
    'currency_code',
    'amount',
    'rate',
    'timestamp',
    'receipt_id'
  ];


  constructor(
    public transService: TransactionsService,
    public toastr: ToastrService,
    public storage: LocalStorage
  ) { }

  ngOnInit() {
    const a  = this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(
      term => {
        console.log('Filtering on: ', term);
        this.dataSource.filter = term.trim().toLowerCase();
      }
    );

    this.subs.add(a);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngAfterViewInit() {
    this.loadTableData(this.dataType);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  refreshData(){
    this.toggleType(this.dataType);
  }

  loadTableData(type) {
    let loadingToast;
    setTimeout(() => loadingToast = this.toastr.info('Loading', '', {timeOut: 0}));
    this.storage.getItem<Users>('am-user', { schema: userSchema })
      .subscribe(user => {
        this.loading = true;
        // get org code and get transactions for org
        this.transService.getOrgTransactions({ code: user.organisation_code, type: type }).toPromise()
          .then(res => {
            // console.log(res);
            this.toastr.clear(loadingToast.toastId);
            this.loading = false;
            this.dataSource.data = res['data'];
            // this.toggleType(this.dataType);
          })
          .catch(error => {
            this.toastr.clear(loadingToast.toastId);
            this.toastr.error('There was an error getting the records. Refresh and try again', 'Error');
            this.loading = false;
          });
      });
  }


  searchTable(searchTerm) {
    this.searchSubject.next(searchTerm);
  }

  toggleType(type) {
    this.dataType = type;
    this.loadTableData(this.dataType);
  }

  exportAsExcel() {
    const workSheet: xlsx.WorkSheet = xlsx.utils.table_to_sheet(this.table.nativeElement);
    const workBook: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workBook, workSheet, 'Transactions');

    xlsx.writeFile(workBook, 'Transactions.xlsx');
  }


}


export interface Transactions {
  timestamp: string;
  receipt_id: string;
  type: string;
  currency_code: string;
  currency_name: string;
  amount: number;
  rate: number;
  full_name: string;
  id_number: string;
  id_type: string;
  home_country: string;
  residential_address: string;
  post_address: string;
  teller_id: string;
  organisation_code: string;
}
