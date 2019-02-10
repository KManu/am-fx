import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DailiesComponent } from './components/dailies/dailies.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { BalanceSheetsComponent } from './components/balance-sheets/balance-sheets.component';
import { SalariesComponent } from './components/salaries/salaries.component';
import { MobileMoneyComponent } from './components/mobile-money/mobile-money.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'dailies',
        component: DailiesComponent
      },
      {
        path: 'expenses',
        component: ExpensesComponent
      },
      {
        path: 'currencies',
        component: CurrenciesComponent
      },
      {
        path: 'balance-sheets',
        component: BalanceSheetsComponent
      },
      {
        path: 'salaries',
        component: SalariesComponent
      },
      {
        path: 'mobile-money',
        component: MobileMoneyComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
