import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

const modules = [ 
  MenuModule, 
  ButtonModule, 
  MenubarModule,
  CardModule,
  FieldsetModule,
  PanelModule,
  ToolbarModule,
  TableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [modules]
})
export class PrimeNgModule { }
