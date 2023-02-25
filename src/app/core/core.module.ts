import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from './services/storage.service';
import { ContactsService } from './services/contacts.service';
import { ApiInterceptorService } from './interceptors/api.interceptor';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { AppStateService } from './services/app-state.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true
    },
    AppStateService,
    AuthGuard,
    AuthService,
    StorageService,
    ContactsService,
    JwtHelperService,
  ]
})
export class CoreModule { }
