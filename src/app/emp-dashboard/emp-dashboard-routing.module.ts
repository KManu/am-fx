import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DailiesComponent } from './components/dailies/dailies.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { MobileMoneyComponent } from './components/mobile-money/mobile-money.component';
import { SellComponent } from './components/sell/sell.component';
import { BuyComponent } from './components/buy/buy.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'buy',
        component: BuyComponent
      },
      {
        path: 'sell',
        component: SellComponent
      },
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
        path: 'mobile-money',
        component: MobileMoneyComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
