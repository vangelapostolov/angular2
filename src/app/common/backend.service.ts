import { Type } from '@angular/core';
import { Identifiable } from './common.interfaces';
import { Contact } from './../contacts/contact.model';

export abstract class BackendService {

  public abstract findAll<T extends Identifiable>(contat: Contact): Promise<T[]>;

  public abstract find<T extends Identifiable>(contact: Contact, id: number): Promise<T>;

  public abstract add<T extends Identifiable>(contact: Contact, item: T): Promise<T>;

  public abstract edit<T extends Identifiable>(contact: Contact, item: T): Promise<T>;

  public abstract delete<T extends Identifiable>(contact: Contact, itemId: number): Promise<T>;

}
