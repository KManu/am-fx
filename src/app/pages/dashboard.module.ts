import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './dashboard-routing.module';
import { DashMainComponent } from './dash-main/dash-main.component';


@NgModule({
  declarations: [DashMainComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  entryComponents: [DashMainComponent]
})
export class DashboardModule { }
