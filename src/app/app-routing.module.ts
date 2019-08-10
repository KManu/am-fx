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
    loadChildren: './admin-dash/admin-dash.module#AdminDashModule'
    // canActivate: [RGuardService]
  },
  {
    path: 'root-dash',
    loadChildren: './root-dash/root-dash.module#RootDashModule'
    // canActivate: [RGuardService]
  },
  {
    path: 'user-dash',
    loadChildren: './user-dash/user-dash.module#UserDashModule'
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
export class AppRoutingModule {}
