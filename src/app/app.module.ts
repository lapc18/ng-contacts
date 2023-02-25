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
import { MessageService } from 'primeng/api';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { Constants } from './core/enums/constant-keys.enum';

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
    JwtModule.forRoot({
      config: {
        allowedDomains: [environment.api.domain],
        tokenGetter: () => localStorage.getItem(Constants.NG_TOKEN)
      }
    }),
    HomeModule,
    AuthModule,
    ProfileModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
