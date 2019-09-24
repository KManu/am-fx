import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashMaterialModule } from '../dash-shared/dash-material/dash-material.module';
import { DashboardRoutingModule } from './user-dash-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';

// Services
import { AccountsService } from './services/accounts.service';

// Externals
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SellComponent } from './components/sell/sell.component';
import { BuyComponent } from './components/buy/buy.component';
import { RecordsComponent } from './components/records/records.component';

@NgModule({
  declarations: [DashboardComponent, SellComponent, BuyComponent, RecordsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashMaterialModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ],
  exports: [DashboardComponent, NgxDatatableModule],
  providers: [AccountsService]
})
export class UserDashModule {}
