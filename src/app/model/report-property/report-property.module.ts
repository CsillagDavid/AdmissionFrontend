import {Category} from '../category/category.module';
import {Activity} from '../activity/activity.module';

export class ReportProperty {
  summedTime: number;
  category: Category;
  activities: Activity[];

  constructor(summedTime: number, category: Category, activities: Activity[]) {
    this.summedTime = summedTime;
    this.category = category;
    this.activities = activities;
  }
}
