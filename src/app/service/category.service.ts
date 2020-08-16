import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BaseService} from './base.service';
import {Observable} from 'rxjs';
import {Category} from '../model/category/category.module';

@Injectable()
export class CategoryService extends BaseService {
  protected GET_CATEGORIES = '/category';

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl + this.GET_CATEGORIES, this.httpOptions);
  }
}
