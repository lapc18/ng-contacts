import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/core/models/contact.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {

  @Input() contact!:Contact;

}
