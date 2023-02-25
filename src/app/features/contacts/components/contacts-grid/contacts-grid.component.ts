import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { skip } from 'rxjs';
import { Contact } from 'src/app/core/models/contact.model';
import { Pagination } from 'src/app/core/models/pagination.model';
import { AppStateService } from 'src/app/core/services/app-state.service';
import { ContactsService } from 'src/app/core/services/contacts.service';

@Component({
  selector: 'app-contacts-grid',
  templateUrl: './contacts-grid.component.html',
  styleUrls: ['./contacts-grid.component.scss']
})
export class ContactsGridComponent implements OnInit {


  public get contacts():Array<Contact> {
    return this.appState.contacts;
  }

  public searchInputValue: string = "";

  public pagination:Pagination = { page: 0, take: 10 };


  constructor(
    private contactsService: ContactsService,
    private messageService: MessageService,
    private appState: AppStateService,
  ){
    appState.canRefresh$.asObservable().pipe(skip(1)).subscribe((res) => this.loadContacts());
  }

  ngOnInit(): void {
    this.loadContacts();
  }

  private loadContacts(): void {
    this.contactsService.find({...this.pagination}).subscribe({
      next: (res) => {
        this.appState.contacts = [...res.body];
      }
    });
  }


  onDeleteContactClicked(contact: Contact): void {
    this.contactsService.softDelete(contact.id!).subscribe({
      complete: () => {
        this.appState.contacts = [...this.contacts.filter(x => x.id != contact.id)];
      },
      error: () => this.messageService.add({ severity: 'error', detail: 'Error removing contact', summary: 'Upsss... Looks like something went wrong, please try again later!' })
    });
  }



}
