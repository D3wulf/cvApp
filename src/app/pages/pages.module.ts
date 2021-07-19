import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrabajosComponent } from './trabajos/trabajos.component';



@NgModule({
  declarations: [FormularioComponent, TrabajosComponent],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[FormularioComponent,TrabajosComponent]
})
export class PagesModule { }
