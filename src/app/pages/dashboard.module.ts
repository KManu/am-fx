import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashMainComponent } from './dash-main/dash-main.component';
import { CoreModule } from '../core/core.module';
import { DashMaterialModule } from './dash-material.module';
import { SidenavComponent } from './dash-main/sidenav/sidenav.component';
import { HeaderComponent } from './dash-main/header/header.component';
import { FooterComponent } from './dash-main/footer/footer.component';



@NgModule({
  declarations: [DashMainComponent, SidenavComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashMaterialModule
  ],
  exports: [
  ],
  entryComponents: [DashMainComponent]
})
export class DashboardModule { }
