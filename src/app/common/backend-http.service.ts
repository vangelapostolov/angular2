import { Injectable, Inject, Type } from '@angular/core';

import { Logger } from './logger.service';
import { Contact, Gender } from './../contacts/contact.model';
import { Identifiable } from './common.interfaces';
import { BackendService } from './backend.service';
import { Headers, Http, RequestOptions, Response} from '@angular/http'

@Injectable()
export class BackendHttpService implements BackendService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(
    @Inject('API_BASE_URL') private baseUrl: string,
    private http: Http,
    private logger: Logger) { }

  public findAll<T extends Identifiable>(contat: Contact): Promise<T[]> {
    let collection = type.name.toLowerCase() + 's';
    return this.http.get(this.baseUrl + '/' + collection)
      .map(response => response.json().data as T[])
      .do((items: User[]) => this.logger.log(`Fetched ${items.length} ${collection}.`))
      .catch(this.handleErrorObservable)
      .toPromise();
  }

  public find<T extends Identifiable>(contat: Contact, id: number): Promise<T> {
    return this.findAll<T>(type).then(
      items => items.filter(item => item.id === id)[0]
    );
  }

  public add<T extends Identifiable>(contat: Contact, item: T): Promise<T> {
        item.id = this.getNextId(CONTACTS);
        CONTACTS.push(item);
        return Promise.resolve(item);
  }

  public edit<T extends Identifiable>(contat: Contact, item: T): Promise<T> {
    let isSuccessful = false;
    let err = new Error(`Cannot edit the contact!`);
    isSuccessful = this.mergeItem(CONTACTS, item);
    return isSuccessful ? Promise.resolve(item) : Promise.reject<T>(err);
  }

 public delete<T extends Identifiable>(contat: Contact, itemId: number): Promise<T> {
    let deleted: T | undefined = undefined;
    let err = new Error(`Cannot delete the contact!`);
    deleted = this.deleteItem(<T[]> CONTACTS, itemId);
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

}
