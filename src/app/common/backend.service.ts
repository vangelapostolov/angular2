import { Type } from '@angular/core';
import { Identifiable } from './common.interfaces';
import { Contact } from './../contacts/contact.model';

export abstract class BackendService {

  public abstract findAll(): Promise<Contact[]>;

  public abstract find(id: number): Promise<Contact>;

  public abstract add(item: Contact): Promise<Contact>;

  public abstract edit<T extends Identifiable>(item: T): Promise<T>;

  public abstract delete<T extends Identifiable>(itemId: number): Promise<boolean>;

}
