import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  menuItem: MenuItem[] = [
    {
      ruta: '/graficas/barras',
      nombre: 'Barras',
    },
    {
      ruta: '/graficas/dona',
      nombre: 'Dona',
    },
    {
      ruta: '/graficas/donahttp',
      nombre: 'Dona Http',
    },
    {
      ruta: '/graficas/graficasdoble',
      nombre: 'Graficas Dobles',
    },
  ];
}
