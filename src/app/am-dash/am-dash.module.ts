import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AmDashRoutingModule } from './am-dash-routing.module';
import { DashboardMaterialModule } from './dashboard-material/dashboard-material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { OrganisationsComponent } from './components/organisations/organisations.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [DashboardComponent, RegisterUserComponent, RegisterAdminComponent, OrganisationsComponent, UsersComponent],
  imports: [
    CommonModule,
    AmDashRoutingModule,
    DashboardMaterialModule,
    ReactiveFormsModule
  ]
})
export class AmDashModule { }
