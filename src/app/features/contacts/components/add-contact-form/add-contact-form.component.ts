import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactsService } from 'src/app/core/services/contacts.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.scss']
})
export class AddContactFormComponent {

  public contactForm!: FormGroup;
  private isFormIncomplete: boolean = false;
  public exitsErrorOnResponse: boolean = false;

  constructor(
    private contactsService: ContactsService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  private loadForm(): void {
    console.log('data', this.config)
    const { data } = this.config;
    const { contact } = data || {};

    this.contactForm = new FormGroup({
      firstName: new FormControl(contact?.firstName || '', [Validators.required]),
      lastName: new FormControl(contact?.lastName || ''),
      nickName: new FormControl(contact?.nickName || ''),
      emails: new FormControl(contact?.emails || '', [Validators.email]),
      phoneNumbers: new FormControl(contact?.phoneNumbers || '', Validators.minLength(10)),
      address: new FormControl(contact?.address || ''),
      website: new FormControl(contact?.website || ''),
    });

    if(contact && contact?.emails) {
      this.contactForm.get('emails')?.disable();
    }
  }

  onSaveContact(): void {
    this.contactsService.create(this.contactForm.value).subscribe({
      next: (res) => {
        this.ref.close({ contact: this.contactForm.value });
      },
      error: (err) => console.log('error add', err)
    });
  }

  onEditContact(): void {
    this.contactsService.update(this.contactForm.value).subscribe({
      next: (res) => {
        this.ref.close({ contact: this.contactForm.value });
      },
      error: (err) => console.log('error editing contact', err)
    });
  }

}
