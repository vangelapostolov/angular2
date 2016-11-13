import { Component, Input, OnInit, SimpleChange } from '@angular/core';

import { Contact } from './contact.model';
import { ContactService } from './contact.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  // moduleId: module.id,
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html'
})

    
export class ContactDetailComponent implements OnInit {
  @Input('contact')
  public contactMaster: Contact = {id: undefined} as Contact;
  public contact: Contact;

  public isNewContact: boolean;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ContactService) { }

  public ngOnInit() {
    this.resetForm();
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      if (id) {
        this.isNewContact = false; // has Id => not new
        this.service.getContact(id).then(
          contact => {
            this.contactMaster = contact;
            this.resetForm();
          });
      }
    });
  }

  public ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    let chng = changes['contact'];
    if (chng.currentValue !== chng.previousValue) {
      this.resetForm();
    }
  }

  public resetForm() {
    this.contact = Object.assign({}, this.contactMaster)
  }
}
