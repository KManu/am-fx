import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Components

// Services
import { StateService } from './services/state.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
// Externals
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    StateService,
    HttpInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})


export class CoreModule {
  /* Needed to expose services to app module */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        StateService,
        HttpInterceptorService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpInterceptorService,
          multi: true
        }
      ]
    };
  }
}

