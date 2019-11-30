import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOrgRoutingModule } from './add-org-routing.module';
import { AddOrgComponent } from './add-org.component';


@NgModule({
  declarations: [AddOrgComponent],
  imports: [
    CommonModule,
    AddOrgRoutingModule
  ]
})
export class AddOrgModule { }
