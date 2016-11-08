import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserListComponent } from './contact-list.component';
import { UserService } from './contact.service';
import { UserDetailComponent } from './contact-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  exports: [
    UserListComponent,
    UserDetailComponent
  ]
})
export class UserModule { }
