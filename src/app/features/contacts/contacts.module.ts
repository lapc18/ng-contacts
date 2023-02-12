import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactsGridComponent } from './components/contacts-grid/contacts-grid.component';
import { ContactListItemComponent } from './components/contact-list-item/contact-list-item.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactFormComponent } from './components/add-contact-form/add-contact-form.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactsComponent } from './contacts.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactCardComponent,
    ContactsGridComponent,
    ContactListItemComponent,
    ContactListComponent,
    AddContactFormComponent,
    ContactDetailComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    CoreModule,
    SharedModule,
  ]
})
export class ContactsModule { }
