import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgUsersRoutingModule } from './org-users-routing.module';
import { OrgUsersComponent } from './org-users.component';


@NgModule({
  declarations: [OrgUsersComponent],
  imports: [
    CommonModule,
    OrgUsersRoutingModule
  ]
})
export class OrgUsersModule { }
