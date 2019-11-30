import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/components/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: '*',
    component: LoginPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'admin-dash',
    loadChildren: () => import('./admin-dash/admin-dash.module').then(m => m.AdminDashModule)
    // canActivate: [RGuardService]
  },
  {
    path: 'root-dash',
    loadChildren: () => import('./root-dash/root-dash.module').then(m => m.RootDashModule)
    // canActivate: [RGuardService]
  },
  {
    path: 'user-dash',
    loadChildren: () => import('./user-dash/user-dash.module').then(m => m.UserDashModule)
    // canActivate: [RGuardService]
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule)
    // canActivate: [RGuardService]
  },
  { path: 'add-admin', loadChildren: () => import('./pages/add-admin/add-admin.module').then(m => m.AddAdminModule) },
  { path: 'add-org', loadChildren: () => import('./pages/add-org/add-org.module').then(m => m.AddOrgModule) },
  { path: 'add-user', loadChildren: () => import('./pages/add-user/add-user.module').then(m => m.AddUserModule) },
  { path: 'buy', loadChildren: () => import('./pages/buy/buy.module').then(m => m.BuyModule) },
  { path: 'sell', loadChildren: () => import('./pages/sell/sell.module').then(m => m.SellModule) },
  { path: 'orgs', loadChildren: () => import('./pages/orgs/orgs.module').then(m => m.OrgsModule) },
  { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
  { path: 'records', loadChildren: () => import('./pages/records/records.module').then(m => m.RecordsModule) },
  { path: 'reports', loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
