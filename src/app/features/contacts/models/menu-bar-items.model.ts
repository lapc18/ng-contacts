import { MenuItem } from "primeng/api";
import { ContactsComponent } from "../contacts.component";

export const MENU_BAR_ITEMS = (component: ContactsComponent):MenuItem[] => [
  {
    label: "New contact",
    icon: "pi pi-plus",
    command: () => component.onAddContactMenuClicked()
  },
  {
    label: "All contacts",
    icon: "pi pi-book",
    command: () => component.onAllContactsMenuClicked()
  },
  {
    label: "Settings",
    icon: "pi pi-cog",
    command: () => component.onSettingsMenuClicked()
  },
];
