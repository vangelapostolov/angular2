import { Injectable, Type } from '@angular/core';

import { Contact } from './contact.model';
import { BackendService } from '../common/backend.service';
import { Logger } from '../common/logger.service';
import { Identifiable } from './../common/common.interfaces';

@Injectable()
export class ContactService {

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  public getContacts(): Promise<Contact[]> {
    return this.backend.findAll().then(
      contacts => {
        this.logger.log(`Fetched ${contacts.length} contacts.`);
        return contacts;
      }).catch(err => {
      throw new Error(`Cannot get contacts in ContactService!`);
    });
  }

  public getContact(id: number): Promise<Contact> {
    return this.backend.find(id);
  }

  public addContact(contact: Contact): Promise<Contact> {
    return this.backend.add(contact);
  }

  public editContact(contact: Contact): Promise<Contact> {
    return this.backend.edit(contact);
  }

  public deleteContact(contactId: number): Promise<boolean> {
    return this.backend.delete(contactId);
  }
}
