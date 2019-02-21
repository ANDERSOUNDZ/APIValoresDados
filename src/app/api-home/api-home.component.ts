import { Component, OnInit, Output } from '@angular/core';
import { Api } from 'src/app/model/api';
import { KttyApiService } from '../services/ktty-api.service';

@Component({
  selector: 'app-api-home',
  templateUrl: './api-home.component.html',
  styleUrls: ['./api-home.component.scss']
})
export class ApiHomeComponent implements OnInit {

  //Este verifica que si esta heredando y lo trae desde el hijo
  //infoCats = [''];
  
  //vrv : string;
 
  infoCats : Api[] = [];

  varNg = 0;

  //crear variable para ngModel

  //empezar a utilizar el servicio
  constructor(private serv: KttyApiService) {}

  //
  ngOnInit() {
    
    //aqui se comunica a la variable para traer la funcion de el servicio
    this.serv.dataInfo(this.varNg).subscribe(
      //creamos variable para mostrar info del modulo api
      (extDatos: Api[]) =>{
        this.infoCats = extDatos;
      }
    )
  }

  value(){
    //if(this.infoCats=this.varNg){
      this.serv.dataInfo(this.varNg).subscribe(
        //creamos variable para mostrar info del modulo api
        (extDatos: Api[]) =>{
          this.infoCats = extDatos;
        }
      )
    //this.infoCats.push(this.varNg);
  }

  //darValor(){
    //this.infoCats.push(this.vrv = this.escape);
  //}


}
 