import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashMaterialModule } from '../dash-shared/dash-material/dash-material.module';
import { AdminDashRoutingModule } from './admin-dash-routing.module';

import { AdminDashboardComponent } from './components/dashboard/admin-dash.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';

// Dashboard Shared
import { DashboardSharedModule } from '../dash-shared/dashboard-shared.module';

// Externals
import { BuyComponent } from './components/buy/buy.component';
import { SellComponent } from './components/sell/sell.component';
import { RecordsComponent } from './components/records/records.component';
import { ReportsComponent } from './components/reports/reports.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    CurrenciesComponent,
    BuyComponent,
    SellComponent,
    RecordsComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    AdminDashRoutingModule,
    DashMaterialModule,
    ReactiveFormsModule,
    DashboardSharedModule
  ],
  exports: [AdminDashboardComponent],
  providers: []
})
export class AdminDashModule {}
