import { Component, OnInit } from '@angular/core';
import { InfoCursosService } from '../../services/info-cursos.service';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-flipbox',
  templateUrl: './flipbox.component.html',
  styles: [`
  /* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */

.flip-box {
    background-color: transparent;
    width: 48%;
    height: 337px;
    perspective: 1000px;
    margin: 5px;
    /* Remove this if you don't want the 3D effect */
}


/* This container is needed to position the front and back side */

.flip-box-inner {
    position: relative;
    width: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}


/* Do an horizontal flip when you move the mouse over the flip box container */

.flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
}


/* Position the front and back side */

.flip-box-front,
.flip-box-back {
    position: absolute;
    
    width: 100%;
    height: 335px;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
    box-shadow: 1px 1px 5px 4px #fefefe
}




/* Style the front side */

.flip-box-front {}


/* Style the back side */

.flip-box-back {
  background: rgba(0, 0, 0, 0.8);
    
    padding: 30px;
    transform: rotateY(180deg);
    
}

.flip-box-back h5{
  color:white;
}


@media only screen and (max-width: 1400px) {
    .flip-box {
        background-color: transparent;
        width: 46%;
        height: 335px;
        perspective: 1000px;
        margin: 5px;
        /* Remove this if you don't want the 3D effect */
    }
}

@media(max-width: 1024px) {
    .flip-box {
        background-color: transparent;
        width: 46%;
        height: 335px;
        perspective: 1000px;
        margin: 5px;
        /* Remove this if you don't want the 3D effect */
    }
}

@media(max-width: 768px) {
    .flip-box {
        background-color: transparent;
        width: 90%;
        height: 335px;
        perspective: 1000px;
        margin: 5px;
        position: relative;
        left: 20px;
        /* Remove this if you don't want the 3D effect */
    }
}
  
  `
  ]
})
export class FlipboxComponent implements OnInit {

    misCursos:Curso[]= [

    ];

  constructor(private cursoService:InfoCursosService
  ) { }

  ngOnInit(): void {
      this.cargarCursos();

  }

  cargarCursos(){

    this.cursoService.cargarCursos().subscribe(cursos=>{

        this.misCursos = cursos;
        console.log(cursos);
       
     })

  }

}
