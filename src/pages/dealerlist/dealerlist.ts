import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DealerformPage } from '../dealerform/dealerform';
import { DealerdetailsPage } from '../dealerdetails/dealerdetails';

@Component({
  selector: 'page-dealerlist',
  templateUrl: 'dealerlist.html',
})
export class DealerlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('You are at DealerlistsPage');
  }

  addNewDelaer(){
    this.navCtrl.push(DealerformPage);
  }

  dealerDetails(){
    this.navCtrl.push(DealerdetailsPage);
  }
}
