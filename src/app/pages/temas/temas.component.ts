import { Component, OnInit } from '@angular/core';
import { CambioTemaService } from '../../services/cambio-tema.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styles: [
  ]
})
export class TemasComponent implements OnInit {

   // //ojo que el link href del head puede tener id!
  // public enlaceTema = document.querySelector('#theme');
 
  constructor(private temaService:CambioTemaService) { }

  ngOnInit(): void {
    
    this.temaService.checkCurrentTheme();
  
  }

  changeTheme(theme:string){
    this.temaService.changeTheme(theme);
    
  }

}
