import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { GraficaComponent } from './grafica/grafica.component';



@NgModule({
  declarations: [FormularioComponent, TrabajosComponent, GraficaComponent],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  exports:[FormularioComponent,TrabajosComponent,GraficaComponent]
})
export class PagesModule { }
