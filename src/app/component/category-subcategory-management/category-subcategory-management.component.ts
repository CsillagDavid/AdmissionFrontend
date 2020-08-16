import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {ActivityService} from '../../service/activity.service';
import {Category} from '../../model/category/category.module';

@Component({
  selector: 'app-category-subcategory-management',
  templateUrl: './category-subcategory-management.component.html',
  styleUrls: ['./category-subcategory-management.component.css']
})
export class CategorySubcategoryManagementComponent implements OnInit {
 categories: Category[] = [];
  selectedCategory: Category;
  constructor(private categoryService: CategoryService) {
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

  select(category: Category) {
    this.selectedCategory = category;
  }
}
