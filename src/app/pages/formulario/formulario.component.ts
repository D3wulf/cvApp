
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mensaje } from 'src/app/models/mensaje.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  mensaje:Mensaje[]=[];

  constructor(private fb: FormBuilder) { }

  public miFormulario!: FormGroup; 
 
  ngOnInit(): void {

    this.miFormulario = this.fb.group({
      //los valores como arrays, despues de la coma, van los validadores sincronos y luego asincronos
      nombre: ['Mike', [Validators.required, Validators.minLength(3),] ],
      email: ['m@m.com', [Validators.required, Validators.email] ],
      mensaje: ['hola que tal', [Validators.required, Validators.minLength(6),Validators.maxLength(255)] ],
      
  
    })
  }

  enviar(){

      if(this.miFormulario.valid){

        
        this.mensaje= this.miFormulario.value;
      }

      


  }

}
