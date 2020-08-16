import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReportProperty} from '../../../../model/report-property/report-property.module';
import {Activity} from '../../../../model/activity/activity.module';
import {ActivityModalModifyComponent} from '../../../activity-modal-modify/activity-modal-modify.component';
import {MatDialog} from '@angular/material/dialog';
import {ActivityService} from '../../../../service/activity.service';

@Component({
  selector: 'app-activity-card-component',
  templateUrl: './activity-card-component.component.html',
  styleUrls: ['./activity-card-component.component.css']
})
export class ActivityCardComponentComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('activity') activity: Activity;
  @Output('refresh-report-card-event') refreshReportEvent: EventEmitter<any> = new EventEmitter();
  constructor(public dialog: MatDialog,
              private activityService: ActivityService) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.activityService.delete(this.activity).subscribe(
      res => {
        this.emitter();
      },
      error => {}
    );
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(ActivityModalModifyComponent, {
      width: '75%',
      height: '90%',
      data: this.activity
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.emitter();
      }
    });
  }

  emitter(): void {
    this.refreshReportEvent.emit();
  }
}
