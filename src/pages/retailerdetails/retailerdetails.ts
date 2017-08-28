import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RetailerformPage } from '../retailerform/retailerform';

@Component({
  selector: 'page-retailerdetails',
  templateUrl: 'retailerdetails.html',
})
export class RetailerdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetailerdetailsPage');
  }

  addRetailer(){
    this.navCtrl.push(RetailerformPage);
  }

}
