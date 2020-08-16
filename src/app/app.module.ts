import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HomeComponent} from './component/home/home.component';
import { ReportComponent } from './component/report/report.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {CategoryService} from './service/category.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ActivityService} from './service/activity.service';
import { ActivityComponent } from './component/activity/activity.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReportService} from './service/report.service';
import { ReportCardComponent } from './component/report/report-card/report-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {ActivityCardComponentComponent} from './component/report/report-card/activity-card-component/activity-card-component.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {ErrorInterceptor} from './service/error-interceptor.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivityModalModifyComponent } from './component/activity-modal-modify/activity-modal-modify.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CategorySubcategoryManagementComponent } from './component/category-subcategory-management/category-subcategory-management.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReportComponent,
    NavbarComponent,
    ActivityComponent,
    ReportCardComponent,
    ActivityCardComponentComponent,
    ActivityModalModifyComponent,
    CategorySubcategoryManagementComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatGridListModule,
        AppRoutingModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        HttpClientModule,
        FormsModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatDividerModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatListModule,
    ],
  providers: [CategoryService, ActivityService, ReportService, MatSnackBar,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
