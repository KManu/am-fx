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
    path: 'am-dash',
    loadChildren: './am-dash/am-dash.module#AmDashModule'
    // canActivate: [RGuardService]
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
    // canActivate: [RGuardService]
  },
  {
    path: 'emp-dashboard',
    loadChildren: './emp-dashboard/emp-dashboard.module#EmpDashboardModule'
    // canActivate: [RGuardService]
  },
  {
    path: 'sign-up',
    loadChildren: './sign-up/sign-up.module#SignUpModule'
    // canActivate: [RGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
