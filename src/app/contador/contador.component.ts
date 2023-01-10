import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: 'contador.component.html',
 
})
export class ContadorComponent {
  title = 'Contador App';
  numero:number=10;
  base:number=5

  // sumar (){
  //   this.numero+=this.base;
  // }

  // restar (){
  //   this.numero-=this.base;
  // }

  acumular (valor:number){
    this.numero+=valor;
  }
}
