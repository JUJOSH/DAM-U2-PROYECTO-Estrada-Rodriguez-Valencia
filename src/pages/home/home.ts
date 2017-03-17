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
  constructor(public navCtrl: NavController) {
    
  }
   toggleRegistro(){
    console.log('test');
    this.opt=1;
  }

}
