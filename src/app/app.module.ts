import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { AuthModule } from './features/auth/auth.module';
import { ProfileModule } from './features/profile/profile.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
