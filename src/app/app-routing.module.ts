import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

//import { ContactListComponent }    from './contacts/contact-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent }//,
      //{ path: 'contacts', component: ContactListComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
