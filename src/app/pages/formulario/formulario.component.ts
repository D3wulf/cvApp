
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mensaje } from 'src/app/models/mensaje.model';
import { ContactoService } from '../../services/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  mensaje:Mensaje[]=[];

  constructor(private fb: FormBuilder, private contactoService:ContactoService) { }

  public miFormulario!: FormGroup; 
 
  ngOnInit(): void {

    this.miFormulario = this.fb.group({
      //los valores como arrays, despues de la coma, van los validadores sincronos y luego asincronos
      nombre: ['', [Validators.required, Validators.minLength(3),] ],
      email: ['', [Validators.required, Validators.email] ],
      mensaje: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(255)] ],
      
  
    })
  }

  enviar(){
    //Sacamos el nombre del formulario
    const {nombre}= this.miFormulario.value;

    console.log(nombre);

      if(this.miFormulario.valid){

        this.contactoService.crearMensaje(this.miFormulario.value).subscribe(
          resp=> {
            if(resp){
              this.mensaje= this.miFormulario.value;
              Swal.fire(`Gracias ${nombre}!`,`Tu mensaje ha sido enviado!`, 'success' );
              
            }
          }
        )

      }

      


  }

}
