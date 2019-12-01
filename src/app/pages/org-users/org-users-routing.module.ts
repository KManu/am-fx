import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgUsersComponent } from './org-users.component';

const routes: Routes = [{ path: '', component: OrgUsersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgUsersRoutingModule { }
