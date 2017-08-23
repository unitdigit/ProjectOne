import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { RuralmechanicformPage } from '../ruralmechanicform/ruralmechanicform';

/**
 * Generated class for the ApplicationformPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


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