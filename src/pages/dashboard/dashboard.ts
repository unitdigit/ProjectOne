import { Component } from '@angular/core';
import {  NavController, NavParams, } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { DealerdetailsPage } from '../dealerdetails/dealerdetails';
import { RetailerdetailsPage } from '../retailerdetails/retailerdetails';
import { RuraldetailsPage } from '../ruraldetails/ruraldetails';

/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  dealer(){
    this.navCtrl.push(DealerdetailsPage);
  }

  retailer(){
    this.navCtrl.push(RetailerdetailsPage);
  }

  rural(){
    this.navCtrl.push(RuraldetailsPage);
  }

}