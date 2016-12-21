import { Injectable, Type } from '@angular/core';

import { Logger } from './logger.service';
import { Contact, Gender } from './../contacts/contact.model';
import { Identifiable } from './common.interfaces';
import { BackendService } from './backend.service';

const CONTACTS: Contact[] = [
  new Contact('АНКА', 'ПЕТКОВА', Gender.FEMALE, 'anka@abv.bg', '123456', 'Кутузов 1'),
  new Contact('ВАСИЛ', 'ЖЕЛЯЗКОВ', Gender.MALE, 'vasil@abv.bg', '123456', 'Никола Обретенов 23'),
  new Contact('ДАМЯН', 'ИЛИЕВ', Gender.MALE, 'damqn@yahoo.com', '123456', 'Борисова 31'),
  new Contact('ДИМИТЪР', 'СЛАВЧЕВ', Gender.MALE, 'mitko@yahoo.com', '123456', 'Александровска 2'),
  new Contact('ДОРОТЕЯ', 'НИКОЛОВА', Gender.FEMALE, 'dori@gmail.com', '123456', 'Цар Освободител 13'),
  new Contact('ПЕНКА', 'ЦОНЕВА', Gender.FEMALE, 'pepa@gmail.com', '123456', 'Ленин 45')
];

@Injectable()
export class BackendMockService implements BackendService {
  constructor(private logger: Logger) { }

  public findAll(): Promise<Contact[]> {
        return Promise.resolve(CONTACTS);
  }

  public find(id: number): Promise<Contact> {
    return this.findAll().then(
      items => items.filter(item => item.id === id)[0]
    );
  }

  public add(item: Contact): Promise<Contact> {
        item.id = this.getNextId(CONTACTS);
        CONTACTS.push(item);
        return Promise.resolve(item);
  }

  private getNextId(collection: Identifiable[]): number {
    return collection.reduce((prevMaxId, next) =>
      next.id > prevMaxId ? next.id : prevMaxId, 0) + 1;
  }
/*
  public edit<T extends Identifiable>(contacts: Contact[], item: T): Promise<T> {
    let isSuccessful = false;
    let err = new Error(`Cannot edit the contact!`);
    isSuccessful = this.mergeItem(CONTACTS, item);
    return isSuccessful ? Promise.resolve(item) : Promise.reject<T>(err);
  }

 public delete<T extends Identifiable>(contacts: Contact[], itemId: number): Promise<T> {
    let deleted: T | undefined = undefined;
    let err = new Error(`Cannot delete the contact!`);
    deleted = this.deleteItem(<T[]> CONTACTS, itemId);
    return deleted ? Promise.resolve(deleted) : Promise.reject<T>(err);
  }

  private mergeItem(collection: Identifiable[], item: Identifiable): boolean {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].id === item.id) {
        collection[i] = item;
        return true;
      }
    }
    return false;
  }

  private deleteItem <T extends Identifiable> (collection: T[], id: number): T | undefined {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].id === id) {
        return collection.splice(i, 1)[0]; // delete the current element and return deleted
      }
    }
    return undefined;
  }
*/
}
