import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RuralmechanicformPage } from '../ruralmechanicform/ruralmechanicform';

@Component({
  selector: 'page-ruraldetails',
  templateUrl: 'ruraldetails.html',
})
export class RuraldetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RuraldetailsPage');
  }

  addRural(){
    this.navCtrl.push(RuralmechanicformPage);
  }
}