import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [
    CommonModule,
    DynamicDialogModule,
    ToastModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    DataViewModule,
    DropdownModule,
    InputTextModule,
    CardModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    DynamicDialogModule,
    ToastModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    DataViewModule,
    MenubarModule,
    DropdownModule,
    InputTextModule,
    CardModule,
  ],
})
export class SharedModule {}
