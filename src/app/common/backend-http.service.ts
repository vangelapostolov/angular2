import { Injectable, Inject, Type } from '@angular/core';

import { Logger } from './logger.service';
import { Contact, Gender } from './../contacts/contact.model';
import { Identifiable } from './common.interfaces';
import { BackendService } from './backend.service';
import { Headers, Http, RequestOptions, Response} from '@angular/http'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BackendHttpService implements BackendService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(
    @Inject('API_BASE_URL') private baseUrl: string,
    private http: Http,
    private logger: Logger) { }

  public findAll(): Promise<Contact[]> {
    return this.http.get(this.baseUrl + '/contacts')
      .map(response => response.json().data as Contact[])
      .catch(this.handleErrorObservable)
      .toPromise();
  }

  public find(id: number): Promise<Contact> {
    return this.findAll().then(
      items => items.filter(item => item.id === id)[0]
    ).catch(err => {
      throw new Error(`Cannot find contact with id: ${id}`);
    });
  }

  public add(item: Contact): Promise<Contact> {
    return this.http.post(this.baseUrl + '/contacts', JSON.stringify(item), this.options)
      .toPromise()
      .then(res => res.json().data)
      .then(itemData => {
        return itemData;
      }).catch(this.handleErrorPromise);
  }

  public edit<T extends Identifiable>(item: T): Promise<T> {
    return this.http.put(this.baseUrl + '/contact/' + item.id, JSON.stringify(item), this.options)
      .toPromise()
      .then(() => {
        return item;
      }).catch(this.handleErrorPromise);
  }

 public delete<T extends Identifiable>(itemId: number): Promise<boolean> {
    return this.http.delete(this.baseUrl + '/contact/' + itemId)
      .toPromise()
      .then(response => {
        return true;
      }).catch(this.handleErrorPromise);
  }

  private handleErrorObservable(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // in a real world app, we may send the error to some remote logging infrastructure
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private handleErrorPromise(error: any) {
    // in a real world app, we may send the error to some remote logging infrastructure
    console.error(error);
    return Promise.reject(error.message || error.json().error || 'Server error');
  }
}
