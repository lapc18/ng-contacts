import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { AppRoutes } from "src/app/core/enums/app-routes.enum";
import { Contact } from "src/app/core/models/contact.model";
import { User } from "src/app/core/models/user.model";
import { SessionStorageService } from "src/app/core/services/session-storage.service";
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
    private sessionStorageMng: SessionStorageService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {


  }

  ngOnInit(): void {

  }

  gotoIndex(): void {
    const route:string = [AppRoutes.HOME, AppRoutes.LANDING].join('/');
    this.router.navigate([route]);
  }

  signOut(): void {
    this.sessionStorageMng.clear();
    this.router.navigate(['']);
  }

  onAddContactMenuClicked(): void {
    //TODO: open dialog menu here
  }

  onAllContactsMenuClicked(): void {
    const route:string = [AppRoutes.CONTACTS_BOARD, AppRoutes.BOARD].join('/');
    this.router.navigate([route]);
  }

  onSettingsMenuClicked(): void {
    this.router.navigate([AppRoutes.PROFILE]);
  }

}
