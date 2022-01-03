import { Component, ViewChild } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-graficas-doble',
  templateUrl: './graficas-doble.component.html',
  styles: [],
})
export class GraficasDobleComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public proveedoresData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [


    { data: [100, 200, 300, 400, 500], label: 'Vendedor A' },


    { data: [50, 250, 30, 450, 200], label: 'Vendedor B' },


    ]
  };

 public productoData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [{ data: [200, 300, 400, 300, 100], label: 'Carros' ,backgroundColor: 'blue' }],
  };

  public randomize1(data1: any): void {
    // Only Change 3 values
    console.log(data1)
    this.proveedoresData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.chart?.update();
}
  public randomize2(data2: any): void {
    console.log(data2)
    // Only Change 3 values
    data2 = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.chart?.update();
}
}
