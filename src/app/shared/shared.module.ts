import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { PrimeModule } from './prime/prime.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedMaterialModule,
    PrimeModule
  ]
})
export class SharedModule { }
