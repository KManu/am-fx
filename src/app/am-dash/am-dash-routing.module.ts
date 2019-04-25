import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { OrganisationsComponent } from './components/organisations/organisations.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'register-user',
        component: RegisterUserComponent
      },
      {
        path: 'register-admin',
        component: RegisterAdminComponent
      },
      {
        path: 'organisations',
        component: OrganisationsComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmDashRoutingModule { }
