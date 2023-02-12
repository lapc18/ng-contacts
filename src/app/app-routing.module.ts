import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './core/enums/app-routes.enum';

const routes: Routes = [
  { path: AppRoutes.DEFAULT, component: AppComponent, pathMatch: 'full' },
  { path: AppRoutes.AUTH, loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) }, 
  { path: AppRoutes.PROFILE, loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule) },
  { path: AppRoutes.HOME, loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
