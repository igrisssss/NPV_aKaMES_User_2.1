import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HorizontalComponent } from './layout/horizontal/horizontal.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { BreadcrumbComponent } from './main/components/breadcrumb/breadcrumb.component';
import { HomeComponent } from './main/pages/home/home.component';
import { MasterDataComponent } from './main/pages/home/master-data/master-data.component';
import { UserComponent } from './main/pages/home/master-data/user/user.component';
import { UserAddNewComponent } from './main/pages/home/master-data/user/user-add-new/user-add-new.component';
import { UserEditComponent } from './main/pages/home/master-data/user/user-edit/user-edit.component';
import { CrudFormComponent } from './main/components/crud-form/crud-form.component';
import { MenubarModule } from 'primeng/menubar';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from "primeng/avatar";
import { BadgeModule } from "primeng/badge";
import { TitleComponent } from './main/components/title/title.component';
import { CheckboxModule } from 'primeng/checkbox';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {TableModule} from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [
    AppComponent,
    HorizontalComponent,
    NavbarComponent,
    BreadcrumbComponent,
    HomeComponent,
    MasterDataComponent,
    UserComponent,
    UserAddNewComponent,
    UserEditComponent,
    CrudFormComponent,
    TitleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    TieredMenuModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    BadgeModule,
    CheckboxModule,
    BreadcrumbModule,
    TableModule,
    ToolbarModule,
    MultiSelectModule,
    HttpClientModule,
    InputTextModule,
    DropdownModule,
    InputSwitchModule,
    ToastModule,
    ConfirmDialogModule,
    ReactiveFormsModule
  ],

  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
