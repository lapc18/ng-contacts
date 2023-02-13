import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionStorageService } from './services/session-storage.service';
import { ContactsService } from './services/contacts.service';



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
    AuthService,
    SessionStorageService,
    ContactsService,
  ]
})
export class CoreModule { }
