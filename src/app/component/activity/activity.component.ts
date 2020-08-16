import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../model/category/category.module';
import {Subcategory} from '../../model/subcategory/subcategory.module';
import {CategoryService} from '../../service/category.service';
import {ActivityService} from '../../service/activity.service';
import {Activity} from '../../model/activity/activity.module';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activity = '';
  categories: Category[] = [];

  selectedCategory: Category;
  selectedSubcategory: Subcategory;
  from: Date = new Date(Date.now());
  to: Date = new Date(Date.now());

  constructor(private categoryService: CategoryService,
              private activityService: ActivityService) {
    this.categoryService.getCategories()
      .subscribe(
        response => {
          this.categories = response;
        },
        error => {
        }
      );
  }

  ngOnInit(): void {

  }

  onSave(): void{
      // tslint:disable-next-line:max-line-length
      const activity = new Activity(0, this.activity, this.selectedCategory, this.selectedSubcategory, this.from, this.to );
      this.activityService.save(activity).subscribe(
        response => {
          this.activity = '';
          this.selectedCategory = null;
          this.selectedSubcategory = null;
          this.from = new Date(Date.now());
          this.to = new Date(Date.now());
        },
        error => {
        }
      );
  }

  canSave(): boolean{
    return this.to.valueOf() > this.from.valueOf();
  }
}
//
// export function toDateFormValidator(from: Date): ValidatorFn {
//   return (control: AbstractControl): {[key: string]: any} | null => {
//     const to: Date = control.value;
//     console.log((to.valueOf() > from.valueOf()) ? {to: {value: control.value}} : null);
//     return (to.valueOf() > from.valueOf()) ? {to: {value: control.value}} : null;
//   };
// }
