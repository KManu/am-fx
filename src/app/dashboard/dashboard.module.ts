import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardMaterialModule } from './dashboard-material/dashboard-material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';

// Dashboard Shared
import { DashboardSharedModule } from '../dashboard-shared/dashboard-shared.module';

// Externals
import { BuyComponent } from './components/buy/buy.component';
import { SellComponent } from './components/sell/sell.component';
import { RecordsComponent } from './components/records/records.component';
import { ReportsComponent } from './components/reports/reports.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CurrenciesComponent,
    BuyComponent,
    SellComponent,
    RecordsComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardMaterialModule,
    ReactiveFormsModule,
    DashboardSharedModule
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [
  ]
})
export class DashboardModule { }
