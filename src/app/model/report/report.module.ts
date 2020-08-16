import {ReportProperty} from '../report-property/report-property.module';

export class Report {
  categorisedActivities: ReportProperty[];

  constructor(categorisedActivities: ReportProperty[]) {
    this.categorisedActivities = categorisedActivities;
  }
}
