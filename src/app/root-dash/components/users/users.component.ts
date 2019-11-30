import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as xlsx from 'xlsx';
import { UsersService } from '../../services/users.service';
import { OrganisationsService } from '../../services/organisations.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('tableWrapper', { static: true }) table: ElementRef;

  data = [];
  orgs = [];
  dataSource = new MatTableDataSource<Users>();
  selectedOrg = new FormControl('');

  displayedColumns = ['lastName', 'otherNames', 'email', 'role', 'activated', 'created'];
  constructor(
    public usersService: UsersService,
    public toastr: ToastrService,
    public orgService: OrganisationsService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.loadOrgs();
  }

  loadOrgs() {
    this.orgService.getOrgNameAndCode().then((res: any) => {
      this.orgs = res['data'];
    });
  }

  loadTableData() {
    this.selectedOrg.value === '' ?
      this.toastr.warning('You have to select an organisation first.') :
      this.usersService
        .getUsersByOrg(this.selectedOrg.value)
        .then(res => {
          console.log(res);
          this.data = res;
        })
        .catch(error => {
          this.toastr.error('Error Loading Organisation Data.');
        });
  }

  exportAsExcel() {
    const workSheet: xlsx.WorkSheet = xlsx.utils.table_to_sheet(this.table.nativeElement);
    const workBook: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workBook, workSheet, 'Organisations');

    xlsx.writeFile(workBook, 'Organisations.xlsx');
  }
}

export interface Users {
  code: string;
  lastName: string;
  otherNames: string;
  email: string;
  role: string;
  activated: number;
  created: string;
}
