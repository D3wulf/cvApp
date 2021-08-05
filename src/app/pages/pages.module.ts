import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { GraficaComponent } from './grafica/grafica.component';
import { TemasComponent } from './temas/temas.component';
import { FlipboxComponent } from './flipbox/flipbox.component';
import { JunioComponent } from './junio/junio.component';
import { JulioComponent } from './julio/julio.component';
import { AgostoComponent } from './agosto/agosto.component';




@NgModule({
  declarations: [
    FormularioComponent, 
    TrabajosComponent, 
    GraficaComponent, 
    TemasComponent, 
    FlipboxComponent, JunioComponent, JulioComponent, AgostoComponent],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  exports:[
    FormularioComponent,
    TrabajosComponent,
    GraficaComponent, 
    TemasComponent,
    FlipboxComponent,
    JunioComponent,
    JulioComponent,
    AgostoComponent
  ]
})
export class PagesModule { }
