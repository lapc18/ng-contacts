import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { DialogService } from "primeng/dynamicdialog";
import { AppRoutes } from "src/app/core/enums/app-routes.enum";
import { Contact } from "src/app/core/models/contact.model";
import { User } from "src/app/core/models/user.model";
import { AuthService } from "src/app/core/services/auth.service";
import { StorageService } from "src/app/core/services/storage.service";
import { AddContactFormComponent } from "./components/add-contact-form/add-contact-form.component";
import { MENU_BAR_ITEMS } from "./models/menu-bar-items.model";


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  public user?: User;
  public contacts: Array<Contact> = [];

  public menuItems:MenuItem[] = MENU_BAR_ITEMS(this);


  constructor(
    private storageMng: StorageService,
    private router: Router,
    public dialogService: DialogService,
    private authService: AuthService,
  ) {


  }

  ngOnInit(): void {

  }

  gotoIndex(): void {
    const route:string = [AppRoutes.HOME, AppRoutes.LANDING].join('/');
    this.router.navigate([route]);
  }

  signOut(): void {
    this.storageMng.clear();
    this.router.navigate(['']);
  }

  onAddContactMenuClicked(): void {
    const ref = this.dialogService.open(AddContactFormComponent, {
      width: "80%",
      closable: true,
      closeOnEscape: true
    });

    ref.onClose.subscribe({
      next: () => location.reload
    });
  }

  onAllContactsMenuClicked(): void {
    const route:string = [AppRoutes.CONTACTS_BOARD, AppRoutes.BOARD].join('/');
    this.router.navigate([route]);
  }

  onSettingsMenuClicked(): void {
    this.router.navigate([AppRoutes.PROFILE]);
  }

}
