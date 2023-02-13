import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.model';
import { Pagination } from 'src/app/core/models/pagination.model';
import { ContactsService } from 'src/app/core/services/contacts.service';

@Component({
  selector: 'app-contacts-grid',
  templateUrl: './contacts-grid.component.html',
  styleUrls: ['./contacts-grid.component.scss']
})
export class ContactsGridComponent implements OnInit {


  public contacts: Array<Contact> = [];

  public searchInputValue: string = "";

  public pagination:Pagination = { page: 0, take: 10 };


  constructor(
    private contactsService: ContactsService
  ){}

  ngOnInit(): void {
    this.loadContacts();
  }

  private loadContacts(): void {
    this.contactsService.find({...this.pagination}).subscribe({
      next: (res) => {
        this.contacts = [...res.body];
      }
    });
  }


  onDeleteContactClicked(contact: Contact): void {
    this.contactsService.softDelete(contact.id!).subscribe({
      complete: () => {
        console.log('removed contact:', JSON.stringify(contact));
      }
    });
  }



}
