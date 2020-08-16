import { Component, OnInit } from '@angular/core';
import {ReportService} from '../../service/report.service';
import {Report} from '../../model/report/report.module';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  report: Report = new Report([]);

  constructor(private reportService: ReportService) {
    this.refreshReport();
  }

  ngOnInit(): void {
  }

  refreshReport(): void {
    this.reportService.getDailyReport().subscribe(
      response => {
        this.report = response;
      },
      error => {
      }
    );
  }
}
