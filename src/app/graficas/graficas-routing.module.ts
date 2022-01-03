import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraficasDobleComponent } from './pages/graficas-doble/graficas-doble.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'barras',
        component: BarrasComponent,
      },
      {
        path: 'dona',
        component: DonaComponent,
      },
      {
        path: 'donahttp',
        component: DonaHttpComponent,
      },
      {
        path: 'graficasdoble',
        component: GraficasDobleComponent,
      },
      {
        path: '**',
        redirectTo: 'barras',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraficasRoutingModule {}
