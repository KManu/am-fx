import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page.component';
import { SharedMaterialModule } from '../shared/shared-material/shared-material.module';
import { LoginService } from './login.service';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, LoginRoutingModule, SharedMaterialModule, ReactiveFormsModule],
  providers: [LoginService]
})
export class LoginModule {}
