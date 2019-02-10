import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/components/login-page/login-page.component';


const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
