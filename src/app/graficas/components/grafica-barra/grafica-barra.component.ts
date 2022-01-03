import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [],
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    indexAxis: 'x',
    responsive: true,
  };
  @Input() barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<'bar'> = {
     labels: [],
     datasets: [],
  };

  constructor() {}

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
    }
  }

  @Input() randomize(): void {
    // Only Change 3 values

    this.barChartData.datasets[0].data = [
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    // ];
    // this.barChartData.datasets[1].data = [
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    // ];
    // this.barChartData.datasets[2].data = [
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    //   Math.round(Math.random() * 100),
    // ];

    // this.chart?.update();
    ]
  }
}
