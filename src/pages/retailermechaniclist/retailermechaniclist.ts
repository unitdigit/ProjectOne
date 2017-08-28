import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RetailerformPage } from '../retailerform/retailerform';
import { RetailermechanicdetailsPage } from '../retailermechanicdetails/retailermechanicdetails';

@Component({
  selector: 'page-retailermechaniclist',
  templateUrl: 'retailermechaniclist.html',
})
export class RetailermechaniclistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetailermechaniclistPage');
  }

  addNewRetailerMechanic(){
    this.navCtrl.push(RetailerformPage);
  }

  retailerMechanicDetails(){
    this.navCtrl.push(RetailermechanicdetailsPage);
  }
}
