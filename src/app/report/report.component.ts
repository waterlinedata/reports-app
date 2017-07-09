import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  public chart;
  public loading: boolean;
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    // configure the chart
    // TODO: implement actual chart; right now we're just configuring a bar chart. See http://c3js.org for options:
    this.chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [],
        type: 'bar'
      },
      bar: {
        width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
        }
      }
    });

    // pull data
    this.loading = true;
    this.reportService.chartData.subscribe(data => {
      this.loading = false;

      if (data && data['Duplicate Test Results']['results']) {
        // load chart with data
        // TODO load actual data into the chart and remove this; right now we're just loading with dummy data:
        this.chart.load(
          {
            columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 130, 100, 140, 200, 150, 50]
            ]
          }
        );

        // TODO: remove this. Right now it's just verifying that our load of data is working:
        console.log('num entries: ' + data['Duplicate Test Results']['results'].length);
      }

    }, err => {
      console.log(err);
    });

  }

}
