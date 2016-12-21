import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ContactListComponent } from './contact-list.component';
import { ContactService } from './contact.service';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ContactRoutingModule
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
