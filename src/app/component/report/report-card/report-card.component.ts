import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {ReportProperty} from '../../../model/report-property/report-property.module';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {

  @Input('report-property') reportProperty: ReportProperty;
  @Output('refresh-report-event') refreshReportEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emitter(): void {
    this.refreshReportEvent.emit();
  }
}
