import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent implements OnInit {
  constructor () {
    console.log('constructor');
  }
  
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  heroes:string []=['Spiderman','Ironman','Thor','Hulk','Capitan America'];
  // borrados:string []=[];
  borrados:string ='';

  borrarHeroe (): void {
      //  if(this.heroes.length!=0){
      // const elemento = this.heroes.shift();
      // if (elemento!=undefined){
      //   this.borrados.push(elemento);
      // console.log(elemento); 

      this.borrados=this.heroes.shift()||'';
      }
       
    }
     
    
      
    
    
      
     
  


  
  
