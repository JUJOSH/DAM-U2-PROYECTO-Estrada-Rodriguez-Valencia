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
    this.cont+=1;
    if(this.cont > 1){
      this.cont=0;
      this.opt=0;
    }else{
    this.opt=1;
    }
   
  }

}
