import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { RetailerformPage } from '../retailerform/retailerform';

/**
 * Generated class for the ApplicationformPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


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
