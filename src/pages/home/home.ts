import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public registrar:boolean;
  public valor:any;
  public opt:number=0;
  public cont:number=0;
  constructor(public navCtrl: NavController) {
    
  }
   toggleRegistro(){
    console.log('test');
    this.cont+=1;
    if(this.cont == 2){
      this.cont=0;
    }
    this.opt=1;
  }

}
