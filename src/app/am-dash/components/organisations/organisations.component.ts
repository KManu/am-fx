import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OrganisationsService } from '../../services/organisations.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.scss']
})

export class OrganisationsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('tableWrapper') table: ElementRef;

  data = [];
  dataSource = new MatTableDataSource<Organisations>();

  displayedColumns = [
    'name',
    'code',
    'email',
    'phone',
    'location',
    'activated',
    'created'
  ];


  constructor(
    public orgService: OrganisationsService,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.loadTableData();
  }

  loadTableData() {
    this.orgService.getOrganisations()
      .then((data) => {
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
