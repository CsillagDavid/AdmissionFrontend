import {Subcategory} from '../subcategory/subcategory.module';

export class Category {
  id: number;
  name: string;
  subcategories: Subcategory[];

  constructor(id: number, name: string, subcategories: Subcategory[]) {
    this.id = id;
    this.name = name;
    this.subcategories = subcategories;
  }

}
