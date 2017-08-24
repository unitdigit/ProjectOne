import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';

import { ChatPage } from '../chat/chat';
import { SignupPage } from '../signup/signup';
import { PasswordresetPage } from '../passwordreset/passwordreset';
import { ProfilepicPage } from '../profilepic/profilepic';
import { DashboardPage } from '../dashboard/dashboard';
import { ApplicationformPage } from '../applicationform/applicationform';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  firedata = firebase.database().ref('/users');
    username: any = {};


     user = {
    email: '',
    password: ''	
  }

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth,
      private alertCtrl: AlertController) {

  }

    showAlert(title: string, message: string) {
      let alertBox = this.alertCtrl.create({
        title: title,
        subTitle: message,
        buttons: ['OK']
      });
      alertBox.present();
    }

    async loginUser() {
    this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
    .then(auth => {
      //Do custom things with auth
	 this.firedata.child(firebase.auth().currentUser.uid).once('value',  (snap) => { 
	    let userdata = snap.val();
		 this.username = userdata.displayName;
	console.log(this.username);
		 });
      this.navCtrl.push(DashboardPage);
   //this.navCtrl.setRoot(ProfilepicPage);
	 /*this.navCtrl.push(ChatPage,{
	 username:this.username
	 });*/
    }) .catch(err => {
            this.showAlert('Error', 'Invalid Username or Password');
        });
    }
	
passwordreset() {
    this.navCtrl.push(PasswordresetPage,{
                email: this.user.email
            });
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }
}