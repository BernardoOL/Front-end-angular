import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasRoutingModule } from './contas-routing.module';
import { ContasComponent } from './contas/contas.component';


@NgModule({
  declarations: [
    ContasComponent
  ],
  imports: [
    CommonModule,
    ContasRoutingModule
  ]
})
export class ContasModule { }
