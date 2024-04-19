import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = []

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/products/basics'
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: '/products/numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: '/products/uncomon'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: '/products/custom'
          }
        ]
      }
    ]
  }

}
