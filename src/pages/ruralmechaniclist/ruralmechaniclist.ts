import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RuralmechanicformPage } from '../ruralmechanicform/ruralmechanicform';
import { RuralmechanicdetailsPage } from '../ruralmechanicdetails/ruralmechanicdetails';
//import { RetailerdetailsPage } from '../retailermechanicdetails/retailermechanicdetails';
//import { RuraldetailsPage } from '../ruralmechanicdetails/ruralmechanicdetails';

@Component({
  selector: 'page-ruralmechaniclist',
  templateUrl: 'ruralmechaniclist.html',
})
export class RuralmechaniclistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('You are at RuralmechaniclistPage');
  }

  addNewRuralMechanic(){
    this.navCtrl.push(RuralmechanicformPage);
  }

  ruralMechanicDetails(){
    this.navCtrl.push(RuralmechanicdetailsPage);
  }
}