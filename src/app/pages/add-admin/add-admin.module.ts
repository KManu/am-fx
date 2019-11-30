import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAdminRoutingModule } from './add-admin-routing.module';
import { AddAdminComponent } from './add-admin.component';


@NgModule({
  declarations: [AddAdminComponent],
  imports: [
    CommonModule,
    AddAdminRoutingModule
  ]
})
export class AddAdminModule { }
