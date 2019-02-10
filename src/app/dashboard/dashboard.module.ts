import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardMaterialModule } from './dashboard-material/dashboard-material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DailiesComponent } from './components/dailies/dailies.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { BalanceSheetsComponent } from './components/balance-sheets/balance-sheets.component';
import { SalariesComponent } from './components/salaries/salaries.component';
import { MobileMoneyComponent } from './components/mobile-money/mobile-money.component';
// Services
import { AccountsService } from './services/accounts.service';
import { VerifiedUsersService } from './services/verified-users.service';

// Externals
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    DashboardComponent,
    DailiesComponent,
    ExpensesComponent,
    CurrenciesComponent,
    BalanceSheetsComponent,
    SalariesComponent,
    MobileMoneyComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardMaterialModule,
    NgxDatatableModule
  ],
  exports: [
    DashboardComponent,
    NgxDatatableModule
  ],
  providers: [
    AccountsService,
    VerifiedUsersService
  ]
})
export class DashboardModule { }
