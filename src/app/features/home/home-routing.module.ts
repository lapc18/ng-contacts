import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/app/core/enums/app-routes.enum';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: AppRoutes.DEFAULT,
    component: HomeComponent,
    children: [
      { path: AppRoutes.DEFAULT, redirectTo: AppRoutes.LANDING, pathMatch: 'full' },
      { path: AppRoutes.LANDING, component: LandingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
