import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgsComponent } from './orgs.component';

const routes: Routes = [{ path: '', component: OrgsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgsRoutingModule { }
