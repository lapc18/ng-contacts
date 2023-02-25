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
    this.contactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      nickName: new FormControl(''),
      emails: new FormControl('', [Validators.email]),
      phoneNumbers: new FormControl('', Validators.minLength(10)),
      address: new FormControl(''),
      website: new FormControl(''),
    });
  }

  onSaveContact(): void {
    this.contactsService.create(this.contactForm.value).subscribe({
      next: (res) => {
        this.ref.close({ contact: this.contactForm.value });
      },
      error: (err) => console.log('error add', err)
    });


  }

}
