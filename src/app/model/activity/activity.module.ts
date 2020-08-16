import {Category} from '../category/category.module';
import {Subcategory} from '../subcategory/subcategory.module';

export class Activity {
  id: number;
  comment: string;
  category: Category;
  subcategory: Subcategory;
  startDate: Date;
  endDate: Date;

  constructor(id: number, comment: string, category: Category, subcategory: Subcategory, startDate: Date, endDate: Date) {
    this.id = id;
    this.comment = comment;
    this.category = category;
    this.subcategory = subcategory;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
