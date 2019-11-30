import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddOrgComponent } from './add-org.component';

const routes: Routes = [{ path: '', component: AddOrgComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddOrgRoutingModule { }
