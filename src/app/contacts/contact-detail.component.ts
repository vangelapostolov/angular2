import { Component, Input, OnInit, SimpleChange } from '@angular/core';

import { User } from './user.model';
import { UserService } from './user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'user-detail',
  templateUrl: './user-detail.component.html'
})

    
export class UserDetailComponent implements OnInit {
  @Input('user')
  public userMaster: User = {id: undefined};
  public user: User;

  public isNewUser: boolean;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService) { }

  public ngOnInit() {
    this.resetForm();
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      if (id) {
        this.isNewUser = false; // has Id => not new
        this.service.getUser(id).then(
          user => {
            this.userMaster = user;
            this.resetForm();
          });
      }
    });
  }

  public ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    let chng = changes['user'];
    if (chng.currentValue !== chng.previousValue) {
      this.resetForm();
    }
  }

  public resetForm() {
    this.user = Object.assign({}, this.userMaster)
  }
}
