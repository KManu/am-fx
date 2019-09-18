import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterUserComponent } from './components/add-user/add-user.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { OrgsComponent } from './components/orgs/orgs.component';
import { UsersComponent } from './components/users/users.component';
import { AddOrgComponent } from './components/add-org/add-org.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'add-user',
        component: RegisterUserComponent
      },
      {
        path: 'add-admin',
        component: AddAdminComponent
      },
      {
        path: 'add-org',
        component: AddOrgComponent
      },
      {
        path: 'organisations',
        component: OrgsComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmDashRoutingModule {}
