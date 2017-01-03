import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { BackendService }      from './backend.service';
import { Logger }              from './logger.service';
import { BackendHttpService } from './backend-http.service';
import { HttpModule }    from '@angular/http';
import { OpaqueToken } from '@angular/core';
import { BackendMockService } from './backend-mock.service';

export const API_BASE_URL = new OpaqueToken('api.base.url');

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    Logger,
    { provide: 'API_BASE_URL', useValue: '/api' },
    //{ provide: BackendService, useClass: BackendHttpService }
    { provide: BackendService, useClass: BackendMockService }
  ]
})
export class CommonModule { }
