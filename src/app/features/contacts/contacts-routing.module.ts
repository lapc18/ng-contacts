import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/app/core/enums/app-routes.enum';
import { ContactsGridComponent } from './components/contacts-grid/contacts-grid.component';
import { ContactsComponent } from './contacts.component';

const routes: Routes = [
  { path: AppRoutes.DEFAULT, redirectTo: AppRoutes.BOARD, pathMatch: "full" },
  {
    path: AppRoutes.BOARD,
    component: ContactsComponent,
    children: [
      {
        path: AppRoutes.DEFAULT,
        component: ContactsGridComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
