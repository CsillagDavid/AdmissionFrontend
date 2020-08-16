import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Observable} from 'rxjs';
import {Report} from '../model/report/report.module';

@Injectable()
export class ReportService extends BaseService {
  protected GET_REPORT = '/report';

  getDailyReport(): Observable<Report> {
    return this.httpClient.get<Report>(this.baseUrl + this.GET_REPORT, this.httpOptions);
  }
}
