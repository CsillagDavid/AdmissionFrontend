import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class BaseService {
  // Base url
  protected baseUrl = 'http://localhost:5000';
  // Http Headers
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8;',
      'Access-Control-Allow-Origin' : '*',
    })
  };
  // tslint:disable-next-line:variable-name
  constructor(protected httpClient: HttpClient) {
  }

}
