import { Component } from '@angular/core';
import {  NavController, NavParams,AlertController} from 'ionic-angular';
import firebase from 'firebase';

@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
})
export class PasswordresetPage {
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
 public alertCtrl: AlertController) {
  this.email = this.navParams.get('email');
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad PasswordresetPage');
  }

  async reset() {
	//console.log(this.email);
   let alert = this.alertCtrl.create({
      buttons: ['Ok']
    });
	  
      firebase.auth().sendPasswordResetEmail( this.email ).then(() => {
     alert.setTitle('Email Sent');
        alert.setSubTitle('Please follow the instructions in the email to reset your password');
      }).catch((err) => {
        alert.setTitle('Failed');
      })

  }

  goback() {
    this.navCtrl.setRoot('HomePage');
  }

}
