import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/app/core/enums/app-routes.enum';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  { path: AppRoutes.DEFAULT, redirectTo: AppRoutes.BOARD, pathMatch: "full" },
  { path: AppRoutes.BOARD, component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
