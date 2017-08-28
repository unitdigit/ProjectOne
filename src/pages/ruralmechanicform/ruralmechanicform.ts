import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ruralmechanicform',
  templateUrl: 'ruralmechanicform.html',
})
export class RuralmechanicformPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RuralmechanicformPage');
  }

}
