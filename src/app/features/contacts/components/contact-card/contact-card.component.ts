import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Contact } from 'src/app/core/models/contact.model';
import { AppStateService } from 'src/app/core/services/app-state.service';
import { AddContactFormComponent } from '../add-contact-form/add-contact-form.component';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent {
  @Input() contact!: Contact;
  @Output() onDelete: EventEmitter<Contact> = new EventEmitter();
  @Output() onEdit: EventEmitter<Contact> = new EventEmitter();

  constructor(
    public dialogService: DialogService,
    private appState: AppStateService,
  ) {}


  onEditClicked(): void {
    this.onEdit.emit(this.contact);
    const ref = this.dialogService.open(AddContactFormComponent, {
      width: "80%",
      closable: true,
      closeOnEscape: true,
      data: { contact: { ...this.contact }}
    });

    ref.onClose.subscribe({
      next: (contact) => this.appState.canRefresh$.next(true)
    });
  }
}
