import { Injectable, Type } from '@angular/core';

import { Logger } from './logger.service';
//import { Contact, Gender } from './../contacts/contact.model';
import { Identifiable } from './common.interfaces';
/*
const CONTACTS: Identifiable[] = [
  new Contact('John', 'Smith', Gender.MALE, 'john@abv.bg', 'john'),
  new Contact('Sara', 'Smith', Gender.FEMALE, 'sara@abv.bg', 'sara'),
  new Contact('Veronica', 'Simpson', Gender.FEMALE, 'vera@yahoo.com', 'vera'),
  new Contact('Simon', 'Stars', Gender.MALE, 'simon@yahoo.com', 'simon'),
  new Contact('Brian', 'Harisson', Gender.MALE, 'brian@gmail.com', 'brian'),
  new Contact('Svetlana', 'Borisova', Gender.FEMALE, 'sveta@gmail.com', 'sveta')
];
*/
@Injectable()
export class BackendService {
  constructor(private logger: Logger) { }
/*
  public findAll<T extends Identifiable>(type: Type<T>): Promise<T[]> {
    switch (type.name) {
      case Contact.name:
        return Promise.resolve(CONTACTS);
      default:
        let err = new Error(`Cannot recognize entity type: ${type.name}`);
        return Promise.reject<T[]>(err);
    }
  }

  public find<T extends Identifiable>(type: Type<T>, id: number): Promise<T> {
    return this.findAll<T>(type).then(
      items => items.filter(item => item.id === id)[0]
    ).catch(err => {
      throw new Error(`Cannot find object of type: ${type.name} with id: ${id}`);
    });
  }

  public add<T extends Identifiable>(type: Type<T>, item: T): Promise<T> {
    switch (type.name) {
      case Contact.name:
        item.id = this.getNextId(CONTACTS);
        CONTACTS.push(item);
        return Promise.resolve(item);
      default:
        let err = new Error(`Cannot recognize entity type: ${type.name}`);
        return Promise.reject<T>(err);
    }
  }

  public edit<T extends Identifiable>(type: Type<T>, item: T): Promise<T> {
    let isSuccessful = false;
    let err = new Error(`${type.name} with ID:${item.id} does not exist: ${JSON.stringify(item)}.`);
    switch (type.name) {
      case Contact.name:
        isSuccessful = this.mergeItem(CONTACTS, item);
        break;
      default:
        err = new Error(`Cannot recognize entity type: ${type.name}`);
    }
    return isSuccessful ? Promise.resolve(item) : Promise.reject<T>(err);
  }

 public delete<T extends Identifiable>(type: Type<T>, itemId: number): Promise<T> {
    let deleted: T | undefined = undefined;
    let err = new Error(`${type.name} with ID:${itemId} does not exist.`);
    switch (type.name) {
      case Contact.name:
        deleted = this.deleteItem(<T[]> CONTACTS, itemId);
        break;
      default:
        err = new Error(`Cannot recognize entity type: ${type.name}`);
    }
    return deleted ? Promise.resolve(deleted) : Promise.reject<T>(err);
  }

  private getNextId(collection: Identifiable[]): number {
    return collection.reduce((prevMaxId, next) =>
      next.id > prevMaxId ? next.id : prevMaxId, 0) + 1;
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
