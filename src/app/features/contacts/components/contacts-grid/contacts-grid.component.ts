import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactsService } from 'src/app/core/services/contacts.service';

@Component({
  selector: 'app-contacts-grid',
  templateUrl: './contacts-grid.component.html',
  styleUrls: ['./contacts-grid.component.scss']
})
export class ContactsGridComponent implements OnInit {


  public contacts: Array<Contact> = [
    { id: 0, firstName: "ztest", lastName: "contact", nickName: "test nickname", address: "some street", company: "devlegnd", website: "lapc.com"},
    { id: 1, firstName: "test", lastName: "contact"},
    { id: 3, firstName: "test", lastName: "contact"},
    { id: 44, firstName: "atest x", lastName: "contact"},
    { id: 24, firstName: "test", lastName: "contact"},
    { id: 425, firstName: "test", lastName: "contact"},
    { id: 764, firstName: "test z", lastName: "contact"},
    { id: 46764, firstName: "test", lastName: "contact"},
    { id:764764, firstName: "test", lastName: "contact"},
    { id: 35635, firstName: "test", lastName: "contact"},
    { id: 2, firstName: "ztest a", lastName: "contact"},
  ];


  sortOptions: SelectItem[] = [
    {label: 'A-Z', value: '!name'},
    {label: 'Z-A', value: 'name'}
  ];

  sortOrder!: number;

  sortField!: string;

  sortKey:any = '';

  searchInputValue: string = "";

  constructor(
    private contactsService: ContactsService
  ){}

  ngOnInit(): void {

  }


  onDeleteContactClicked(contact: Contact): void {
    this.contactsService.softDelete(contact.id!).subscribe({
      complete: () => {
        console.log('removed contact:', JSON.stringify(contact));
      }
    });
  }



}
