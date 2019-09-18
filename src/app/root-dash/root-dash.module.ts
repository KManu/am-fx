import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AmDashRoutingModule } from './root-dash-routing.module';
import { DashMaterialModule } from '../dash-shared/dash-material/dash-material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterUserComponent } from './components/add-user/add-user.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { OrgsComponent } from './components/orgs/orgs.component';
import { UsersComponent } from './components/users/users.component';
import { AddOrgComponent } from './components/add-org/add-org.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RegisterUserComponent,
    AddAdminComponent,
    OrgsComponent,
    UsersComponent,
    AddOrgComponent
  ],
  imports: [CommonModule, AmDashRoutingModule, DashMaterialModule, ReactiveFormsModule]
})
export class RootDashModule {}
