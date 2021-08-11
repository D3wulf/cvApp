import { Component, OnInit } from '@angular/core';
import { Trabajo } from '../../interfaces/trabajo';



@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styles: [
  ]
})
export class TrabajosComponent implements OnInit {

  misTrabajos:Trabajo[]=[
    {
      nombre:'Tundra',
      descripcion:'Aplicación de empresa ficticia con MEAN',
      url:'https://tundraapp.herokuapp.com/'
    },
    {
      nombre:'MEAN',
      descripcion:'Api en construcción con MEAN',
      url:'https://angular-auth-masm.herokuapp.com/auth/login'
    },
    {
      nombre:'Api Goty',
      descripcion:'Aplicación para votar, con Angular y Firebase',
      url:'https://angular-goty-568f8.web.app/goty'
    },
    {
      nombre:'Proyecto del curso de Cenec',
      descripcion:'SPA con Angular y llamadas a XML y Json',
      url:'https://cmv-proyecto.dreamhosters.com/'
    },
    {
      nombre:'Mi primera app con VueJs',
      descripcion:'VueJS + Firebase',
      url:'https://vue-api-ed1d5.firebaseapp.com/'
    },
    {
      nombre:'Api de banderas',
      descripcion:'Api de banderas con VueJs',
      url:'https://api-banderas.web.app'
    },
    {
      nombre:'Proyecto Final Módulo',
      descripcion:'Mi proyecto de DAW, con PHP',
      url:'http://fasttoolgala.com.dream.website/index.php'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
