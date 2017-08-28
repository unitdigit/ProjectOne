import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DealerformPage } from '../dealerform/dealerform';

@Component({
  selector: 'page-dealerdetails',
  templateUrl: 'dealerdetails.html',
})
export class DealerdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealerdetailsPage');
  }

  addDelaer(){
    this.navCtrl.push(DealerformPage);
  }
}
