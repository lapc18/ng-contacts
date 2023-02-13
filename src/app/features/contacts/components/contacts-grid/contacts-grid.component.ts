import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Contact } from 'src/app/core/models/contact.model';

@Component({
  selector: 'app-contacts-grid',
  templateUrl: './contacts-grid.component.html',
  styleUrls: ['./contacts-grid.component.scss']
})
export class ContactsGridComponent implements OnInit {


  public contacts: Array<Contact> = [
    { firstName: "ztest", lastName: "contact", nickName: "test nickname", address: "some street", company: "devlegnd", website: "lapc.com"},
    { firstName: "test", lastName: "contact"},
    { firstName: "test", lastName: "contact"},
    { firstName: "atest x", lastName: "contact"},
    { firstName: "test", lastName: "contact"},
    { firstName: "test", lastName: "contact"},
    { firstName: "test z", lastName: "contact"},
    { firstName: "test", lastName: "contact"},
    { firstName: "test", lastName: "contact"},
    { firstName: "test", lastName: "contact"},
    { firstName: "ztest a", lastName: "contact"},
  ];


  sortOptions: SelectItem[] = [
    {label: 'A-Z', value: '!name'},
    {label: 'Z-A', value: 'name'}
  ];

  sortOrder!: number;

  sortField!: string;

  sortKey:any = '';

  searchInputValue: string = "";

  constructor(){}

  ngOnInit(): void {

  }



}
