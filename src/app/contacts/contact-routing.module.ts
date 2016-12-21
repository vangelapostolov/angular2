import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list.component';
import { ContactDetailComponent } from './contact-detail.component';
import { ContactService } from './contact.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'contacts',  component: ContactListComponent },
      {
        path: 'contact/:id',
        component: ContactDetailComponent,
        data: {
          title: 'Edit contact'
        }
       },
      {
        path: 'contact/add',
        pathMatch: 'full',
        component: ContactDetailComponent,
        data: {
          title: 'Add New contact'
        }
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule {}
