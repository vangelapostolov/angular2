import { Component, OnInit } from '@angular/core';

import { Contact, Gender } from './contact.model';
import { ContactService } from './contact.service';

const contactMaleImage = require('../../assets/img/contact_m.png');
const contactFemaleImage = require('../../assets/img/contact_f.png');

@Component({
  // moduleId: module.id,
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styles: [`
    .contact {
      height: 45px;
      width: 350px;
    }
    .contacts .item-badge {
      height: 45px;
      font-size: 1.3em;
    }
    .contact-icon {
      display: block;
      float: right;
    }
  `],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[] = [];
  public selectedContact: Contact;

  public CONTACT_MALE = Gender.MALE;
  public CONTACT_FEMALE = Gender.FEMALE;

  public contactMaleImage = contactMaleImage;
  public contactFemaleImage = contactFemaleImage;

  constructor(private service: ContactService) { }

  public ngOnInit() {
    this.service.getContacts().then(
       contacts => this.contacts = contacts
     );
  }

  public selectItem(contact: Contact) { this.selectedContact = contact; }
}
