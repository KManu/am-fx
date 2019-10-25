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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
