import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Contact } from 'src/app/core/models/contact.model';
import { ContactsService } from 'src/app/core/services/contacts.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';

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
      email: new FormControl('', [Validators.email]),
      phoneNumber: new FormControl(''),
      address: new FormControl(''),
      company: new FormControl(''),
    });
  }

  onSaveContact(): void {
    this.contactsService.create(this.contactForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.ref.close({ contact: this.contactForm.value });
      }
    });


  }

}
