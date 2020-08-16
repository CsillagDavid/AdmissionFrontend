import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Category} from '../../model/category/category.module';
import {Subcategory} from '../../model/subcategory/subcategory.module';
import {MatInput} from '@angular/material/input';
import {CategoryService} from '../../service/category.service';
import {ActivityService} from '../../service/activity.service';
import {Activity} from '../../model/activity/activity.module';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void{

  }

}
