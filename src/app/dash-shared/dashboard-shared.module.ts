import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrenciesService } from './services/currencies.service';
import { DashUserAccountsService } from './services/dash-user-accounts.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    CurrenciesService,
    DashUserAccountsService
  ]
})
export class DashboardSharedModule { }
