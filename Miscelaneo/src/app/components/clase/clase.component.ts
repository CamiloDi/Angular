import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styles: []
})
export class ClaseComponent implements OnInit {

  alerta:string="alert-dark";
  propiedades:Object={
    danger:false
    }
    loading:boolean=false;


  constructor() { }

  ngOnInit() {
  }
  ejecutar(){
    this.loading=true;
    setTimeout(()=>this.loading=false,3000);
  }

}
