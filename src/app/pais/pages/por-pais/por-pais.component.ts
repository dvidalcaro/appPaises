import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { RESTAboutResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {
  
  termino:string='';
  hayError: boolean= false;
  paises: Country[]=[];
  aboutRest: RESTAboutResponse={
    '@context': '',
    '@id': '',
    '@type': '',
    description: ''
  };
 

  constructor(private paisService: PaisService) {
    /* this.showAbaut(); */
   }

 buscar(termino:string){

  this.hayError=false;  
  this.termino=termino;

  this.paisService.buscarPais(this.termino).subscribe((paises) =>{
    console.log(paises);

    this.paises= paises;
    
    
  },(err)=>{
    this.hayError= true;
    this.paises=[];
  })

 }
sugerencia(termino: string){
  this.hayError= false;
}

/*  showAbaut(){
  this.paisService.aboute().subscribe(rest =>{
    console.log(rest);
    this.aboutRest=rest;
  })
 } */
 

}
