import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { ProfilepicPage } from '../profilepic/profilepic';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
 firedata = firebase.database().ref('/users');
  user = {
    email: '',
    password: '',
    displayName: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController, public toastCtrl: ToastController,public afireauth: AngularFireAuth) {
  }

  async signup() {
  console.log(this.user.email );
  console.log(this.user.password );
  console.log(this.user.displayName );
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    if (this.user.email == '' || this.user.password == '' || this.user.displayName == '') {
      toaster.setMessage('All fields are required dude');
      toaster.present();
    }
    else if (this.user.password.length < 7) {
      toaster.setMessage('Password is not strong. Try giving more than six characters');
      toaster.present();
    }
    else {
      let loader = this.loadingCtrl.create({
        content: 'Please wait'
      });
      //loader.present();
       this.afireauth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(() => {
        this.afireauth.auth.currentUser.updateProfile({
          displayName: this.user.displayName,
          photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
        }).then(() => {
          this.firedata.child(this.afireauth.auth.currentUser.uid).set({
            uid: this.afireauth.auth.currentUser.uid,
            displayName: this.user.displayName,
            photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
          }).then(() => {
          this.navCtrl.setRoot(ProfilepicPage);
            }).catch((err) => {
              //reject(err);
          })
          }).catch((err) => {
            //reject(err);
        })
      }). catch((err) => {
        //reject(err);
      })
    }

  }  

  goback() {
    this.navCtrl.setRoot(HomePage);
  }

}