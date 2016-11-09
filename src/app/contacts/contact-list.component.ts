import { Component, OnInit } from '@angular/core';

import { Contact, Role, Gender } from './contact.model';
import { ContactService } from './contact.service';

const customerMaleImage = require('../../assets/img/customer_m.png');
const customerFemaleImage = require('../../assets/img/customer_f.png');
const operatorMaleImage = require('../../assets/img/operator_m.png');
const operatorFemaleImage = require('../../assets/img/operator_f.png');
const adminMaleImage = require('../../assets/img/admin_m.png');
const adminFemaleImage = require('../../assets/img/admin_f.png');

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

  public CUSTOMER_MALE = Role.CUSTOMER + Gender.MALE;
  public CUSTOMER_FEMALE = Role.CUSTOMER + Gender.FEMALE;
  public OPERATOR_MALE = Role.OPERATOR + Gender.MALE;
  public OPERATOR_FEMALE = Role.OPERATOR + Gender.FEMALE;
  public ADMIN_MALE = Role.ADMIN + Gender.MALE;
  public ADMIN_FEMALE = Role.ADMIN + Gender.FEMALE;

  public customerMaleImage = customerMaleImage;
  public customerFemaleImage = customerFemaleImage;
  public operatorMaleImage = operatorMaleImage;
  public operatorFemaleImage = operatorFemaleImage;
  public adminMaleImage = adminMaleImage;
  public adminFemaleImage = adminFemaleImage;

  constructor(private service: ContactService) { }

  public ngOnInit() {
    this.service.getContacts().then(
       contacts => this.contacts = contacts
     );
  }

  public selectItem(contact: Contact) { this.selectedContact = contact; }
}
