import {Component, Inject, OnInit} from '@angular/core';
import {Activity} from '../../model/activity/activity.module';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Category} from '../../model/category/category.module';
import {CategoryService} from '../../service/category.service';
import {Subcategory} from '../../model/subcategory/subcategory.module';
import {ActivityService} from '../../service/activity.service';

@Component({
  selector: 'app-activity-modal-modify',
  templateUrl: './activity-modal-modify.component.html',
  styleUrls: ['./activity-modal-modify.component.css']
})
export class ActivityModalModifyComponent implements OnInit {
  originalActivity: Activity;

  formGroup = new FormGroup({
    comment: new FormControl('',
      [Validators.required]),
    startDate : new FormControl('',
      [Validators.required]),
    toDate :  new FormControl('',
      [Validators.required]),
    category :  new FormControl('',
      [Validators.required]),
    subCategory : new FormControl('',
      [Validators.required]),
  });
  activity = '';
  categories: Category[] = [];

  selectedCategory: Category;
  selectedSubcategory: Subcategory;
  from: Date = new Date(Date.now());
  to: Date = new Date(Date.now());

  constructor(public dialogRef: MatDialogRef<ActivityModalModifyComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Activity,
              private categoryService: CategoryService,
              private activityService: ActivityService) {
    this.dialogRef.backdropClick()
      .subscribe(c => {
        dialogRef.close(false);
      });
    this.categoryService.getCategories().subscribe(
      res => {
        this.categories = res;
        this.selectedCategory = this.categories.find(c => c.id === data.category.id);
        this.selectedSubcategory =  this.selectedCategory.subcategories.length > 0 ?
          this.selectedCategory.subcategories.find(s => s.id === data.subcategory.id) : null;
        this.from = data.startDate;
        this.to = data.endDate;
      },
      err => {}
    );
    this.activity = data.comment;
    this.originalActivity = new Activity(data.id, data.comment, data.category, data.subcategory, data.startDate, data.endDate);
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onSubmit(): void {
    // tslint:disable-next-line:max-line-length
    const activity = new Activity(this.originalActivity.id, this.activity, this.selectedCategory, this.selectedSubcategory, this.from, this.to);
    console.log(activity);
    this.activityService.update(activity).subscribe(
      res => {
        this.dialogRef.close(true);
      },
      error => {}
    );
  }

}
