import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashMainComponent } from './dash-main/dash-main.component';


const routes: Routes = [
  {
    path: '',
    component: DashMainComponent,
    children: [
      {
        path: 'buy', loadChildren: () => import('./buy/buy.module').then(m => m.BuyModule)
      },
      { path: 'sell', loadChildren: () => import('./sell/sell.module').then(m => m.SellModule) },
      { path: 'records', loadChildren: () => import('./records/records.module').then(m => m.RecordsModule) },
      { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
      { path: 'addAdmin', loadChildren: () => import('./add-admin/add-admin.module').then(m => m.AddAdminModule) },
      { path: 'addOrg', loadChildren: () => import('./add-org/add-org.module').then(m => m.AddOrgModule) },
      { path: 'addUser', loadChildren: () => import('./add-user/add-user.module').then(m => m.AddUserModule) },
      { path: 'orgs', loadChildren: () => import('./orgs/orgs.module').then(m => m.OrgsModule) },
      {
        path: 'orgUsers', loadChildren: () => import('./org-users/org-users.module').then(m => m.OrgUsersModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
