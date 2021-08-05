import { Component, Output, EventEmitter, Input} from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent {

  //SI NO RECIBIMOS DEL PADRE, ENVIARIAMOS ESTOS DATOS 
  //SERIAN LOS DATOS PREDEFINIDOS HASTA QUE RECIBAMOS OTROS DEL PADRE
  
  numero:number=0;
  
  @Input() titulo:string= "Tecnologías usadas (Autodidacta + cursos)";
  @Input() sinInput:boolean= false;
  


  //@Input('labels1') labels1:string[]= [];
  @Input('data1') barChartData: ChartDataSets[] = [
    { data: [3,7,9,7], label: 'Angular', backgroundColor: '#02A9FA' },
    { data: [4,6,8,4], label: 'NodeJs' , backgroundColor: '#000000' },
    { data: [0,3,0,0], label: 'ReactJs', backgroundColor: '#df7116' },
    { data: [0,0,0,1], label: 'VueJs', backgroundColor: '#E8CE5A' },
    { data: [7,5,5,7], label: 'Otros(HTML,CSS,JavaScipt)', backgroundColor: '#DF1DF6' },
    
    
  ];
  @Input('labels2') barChartLabels: Label[] = ["Mayo", "Junio", "Julio","Agosto"];
  

  @Input() tituloInput:string= `Prueba de Output + ng Model`

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  //public barChartLabels: Label[] = this.labels1;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  

  // public barChartData: ChartDataSets[] = [];


  constructor() { }
  
  
  // ngOnInit(): void {

  //   this.barChartLabels = this.labels1;
  //   this.barChartData = this.data;
    
  // }

  
  // public randomize(): void {
  //   // Only Change 3 values
  //   this.barChartData[0].data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40 ];

  //     //locuron! randomizamos la segunda barra

  //     this.barChartData[1].data = [
  //       Math.round(Math.random() * 100),
  //       Math.round(Math.random() * 100),
  //       Math.round(Math.random() * 100),
  //       (Math.random() * 100),
  //       Math.round(Math.random() * 100),
  //       (Math.random() * 100),
  //       Math.round(Math.random() * 100), ];

  //       this.barChartData[2].data = [
  //         Math.round(Math.random() * 100),
  //         Math.round(Math.random() * 100),
  //         Math.round(Math.random() * 100),
  //         (Math.random() * 100),
  //         Math.round(Math.random() * 100),
  //         (Math.random() * 100),
  //         Math.round(Math.random() * 100), ];

      
  //}

}
