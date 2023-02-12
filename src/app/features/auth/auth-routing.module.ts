import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/app/core/enums/app-routes.enum';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: AppRoutes.DEFAULT, redirectTo: AppRoutes.LOGIN, pathMatch: "full" },
  { path: AppRoutes.LOGIN, component: LoginComponent },
  { path: AppRoutes.SIGNUP, component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
