import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Curso } from '../models/curso.model';
import { map } from 'rxjs/operators';
import { compileNgModule } from '@angular/compiler';

const url= environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class InfoCursosService {



  constructor( private http:HttpClient) {}

  cargarCursos(){

    const miUrl = `${url}/cursos`;
    return this.http.get<any>(miUrl).pipe(
      map( (resp: {
        cursos:Curso[]
      })=> resp.cursos )
    )
     
    


    // .pipe(
    //   map( (resp: { 
    //     ok:boolean, curso:Curso[] }) => 
    //     resp.curso
        
    //     )
    // );
  }


  

  
}
