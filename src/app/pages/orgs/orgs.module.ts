import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgsRoutingModule } from './orgs-routing.module';
import { OrgsComponent } from './orgs.component';


@NgModule({
  declarations: [OrgsComponent],
  imports: [
    CommonModule,
    OrgsRoutingModule
  ]
})
export class OrgsModule { }
