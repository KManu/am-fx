import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardMaterialModule } from './dashboard-material/dashboard-material.module';
import { DashboardRoutingModule } from './emp-dashboard-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DailiesComponent } from './components/dailies/dailies.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { MobileMoneyComponent } from './components/mobile-money/mobile-money.component';

// Services
import { AccountsService } from './services/accounts.service';
import { VerifiedUsersService } from './services/verified-users.service';

// Externals
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SellComponent } from './components/sell/sell.component';
import { BuyComponent } from './components/buy/buy.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DailiesComponent,
    ExpensesComponent,
    CurrenciesComponent,
    MobileMoneyComponent,
    SellComponent,
    BuyComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardMaterialModule,
    NgxDatatableModule,
    ReactiveFormsModule,
  ],
  exports: [
    DashboardComponent,
    NgxDatatableModule,
  ],
  providers: [
    AccountsService,
    VerifiedUsersService
  ]
})
export class EmpDashboardModule { }
