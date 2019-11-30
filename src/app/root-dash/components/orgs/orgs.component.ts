import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OrgsDataService } from './orgs.data.service';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-organisations',
  templateUrl: './orgs.component.html',
  styleUrls: ['./orgs.component.scss']
})
export class OrgsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('tableWrapper', { static: true }) table: ElementRef;

  data = [];
  dataSource = new MatTableDataSource<Organisations>();

  displayedColumns = ['name', 'code', 'email', 'phone', 'location', 'activated', 'created'];

  constructor(public orgService: OrgsDataService, public toastr: ToastrService) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.loadTableData();
  }

  loadTableData() {
    this.orgService
      .getOrganisations()
      .then(data => {
        console.log(data);
        this.dataSource.data = data['data'];
      })
      .catch(error => {
        this.toastr.error('There was an error while retrieving the table data', 'Error');
      });
  }

  exportAsExcel() {
    const workSheet: xlsx.WorkSheet = xlsx.utils.table_to_sheet(this.table.nativeElement);
    const workBook: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workBook, workSheet, 'Organisations');

    xlsx.writeFile(workBook, 'Organisations.xlsx');
  }
}

export interface Organisations {
  code: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  activated: number;
  created: string;
}
