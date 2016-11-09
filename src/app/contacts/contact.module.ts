import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ContactListComponent } from './contact-list.component';
import { ContactService } from './contact.service';
import { ContactDetailComponent } from './contact-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ContactService
  ],
  declarations: [
    ContactListComponent,
    ContactDetailComponent
  ],
  exports: [
    ContactListComponent,
    ContactDetailComponent
  ]
})
export class ContactModule { }
