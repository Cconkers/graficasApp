import { Component, OnInit } from '@angular/core';

import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  constructor(private GraficasService: GraficasService) {}

  ngOnInit(): void {
    this.GraficasService.getUsuariosSocialesDona().subscribe(
      ({ labels, values }) => {
        console.log(this.doughnutChartData.datasets.length)
        console.log(labels)

        this.doughnutChartLabels = labels;
        this.doughnutChartData.datasets = [
          {
            data:values
          },
        ];
      }
    );
  }

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData = {
    datasets: [
      {
        data: [],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
