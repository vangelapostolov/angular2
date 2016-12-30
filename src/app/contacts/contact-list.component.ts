import { Component, OnInit } from '@angular/core';

import { Contact, Gender } from './contact.model';
import { ContactService } from './contact.service';

const contactMaleImage = require('../../assets/img/contact_m.png');
const contactFemaleImage = require('../../assets/img/contact_f.png');

import { Identifiable } from './../common/common.interfaces';
import { Router } from '@angular/router';
//import { Location } from '@angular/common';
/*
const CONTACTS: Contact[] = [
  new Contact('АНКА', 'ПЕТКОВА', Gender.FEMALE, 'anka@abv.bg', '123456', 'Кутузов 1'),
  new Contact('ВАСИЛ', 'ЖЕЛЯЗКОВ', Gender.MALE, 'vasil@abv.bg', '123456', 'Никола Обретенов 23'),
  new Contact('ДАМЯН', 'ИЛИЕВ', Gender.MALE, 'damqn@yahoo.com', '123456', 'Борисова 31'),
  new Contact('ДИМИТЪР', 'СЛАВЧЕВ', Gender.MALE, 'mitko@yahoo.com', '123456', 'Александровска 2'),
  new Contact('ДОРОТЕЯ', 'НИКОЛОВА', Gender.FEMALE, 'dori@gmail.com', '123456', 'Цар Освободител 13'),
  new Contact('ПЕНКА', 'ЦОНЕВА', Gender.FEMALE, 'pepa@gmail.com', '123456', 'Ленин 45')
];
*/

@Component({
  //moduleId: module.id,
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

  constructor(
    private service: ContactService,
    //private route: ActivatedRoute,
    private router: Router
    //private location: Location
    ) { }

  public ngOnInit() {
    this.service.getContacts().then(
       contacts => this.contacts = contacts
    ).catch(err => {
      throw new Error(`Cannot get contacts!`);
    });
    //this.contacts = CONTACTS;
  }

  //public selectItem(contact: Contact) { this.selectedContact = contact; }
  public selectItem(contact: Contact) { 
    this.selectedContact = contact;
    this.router.navigateByUrl("contact/"+contact.id);
console.log('id: '+contact.id);
  }
  

}
