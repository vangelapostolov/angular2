import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'users',  component: UserListComponent },
      {
        path: 'user/:id',
        component: UserDetailComponent,
        data: {
          title: 'Edit user'
        }
       },
      {
        path: 'user',
        pathMatch: 'full',
        component: UserDetailComponent,
        data: {
          title: 'Add New user'
        }
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule {}
