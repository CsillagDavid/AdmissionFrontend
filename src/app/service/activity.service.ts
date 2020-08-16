import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Observable} from 'rxjs';
import {Activity} from '../model/activity/activity.module';

@Injectable()
// tslint:disable-next-line:align
export class ActivityService extends BaseService {
  save(activity: Activity): Observable<Activity> {
    return this.httpClient.post<Activity>('http://localhost:5000/activity', activity, this.httpOptions);
  }

  update(activity: Activity): Observable<Activity> {
    return this.httpClient.put<Activity>('http://localhost:5000/activity', activity, this.httpOptions);
  }

  delete(activity: Activity): Observable<any> {
    return this.httpClient.post('http://localhost:5000/activity/delete', activity, this.httpOptions);
  }
}
