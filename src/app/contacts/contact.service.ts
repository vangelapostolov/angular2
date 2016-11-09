import { Injectable } from '@angular/core';

import { Contact } from './contact.model';
import { BackendService } from '../common/backend.service';
import { Logger } from '../common/logger.service';

@Injectable()
export class ContactService {

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  public getContacts() {
    return this.backend.findAll(Contact).then(
      contacts => {
        this.logger.log(`Fetched ${contacts.length} contacts.`);
        return contacts;
      });
  }

  public getContact(id: number): Promise<Contact> {
    return this.backend.find(Contact, id);
  }

  public addContact(Contact: Contact): Promise<Contact> {
    return this.backend.add(Contact, Contact);
  }

  public editContact(Contact: Contact): Promise<Contact> {
    return this.backend.edit(Contact, Contact);
  }

  public deleteContact(contactId: number): Promise<Contact> {
    return this.backend.delete(Contact, contactId);
  }
}
