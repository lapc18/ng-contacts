import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutes } from 'src/app/core/enums/app-routes.enum';
import { Contact } from 'src/app/core/models/contact.model';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.scss']
})
export class ContactListItemComponent {
  @Input() contact!: Contact;
  @Output() onDelete: EventEmitter<Contact> = new EventEmitter();
  @Output() onEdit: EventEmitter<Contact> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,

  ) {}

  onCardClicked(): void {
    this.router.navigate([AppRoutes.DETAIL, this.contact.id], {
      relativeTo: this.route,
    });
  }

  onEditClicked(): void {
    this.onEdit.emit(this.contact);
    this.router.navigate([AppRoutes.EDIT, this.contact.id], {
      relativeTo: this.route,
    });
  }
}
