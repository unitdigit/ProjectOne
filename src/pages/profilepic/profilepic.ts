import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProfilepicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profilepic',
  templateUrl: 'profilepic.html',
})
export class ProfilepicPage {
  imgurl = 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e';
  moveon = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public imgservice: ImghandlerProvider,
    public zone: NgZone, public loadingCtrl: LoadingController,public afireauth: AngularFireAuth) {
  }
 
  ionViewDidLoad() {
  }
 
  chooseimage() {
   /* let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();*/
    this.imgservice.uploadimage().then((uploadedurl: any) => {
      //loader.dismiss();
      this.zone.run(() => {
        this.imgurl = uploadedurl;
        this.moveon = false;
      })
    })
	//console.log("huuiooi");
  }
 
  updateproceed() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();
    this.updateimage(this.imgurl).then((res: any) => {
      loader.dismiss();
      if (res.success) {
        this.navCtrl.setRoot(HomePage);
      }
      else {
        alert(res);
      }
    })
  }
 
  proceed() {
    this.navCtrl.setRoot(HomePage);
  }
 updateimage(imageurl) {
      var promise = new Promise((resolve, reject) => {
          this.afireauth.auth.currentUser.updateProfile({
              displayName: this.afireauth.auth.currentUser.displayName,
              photoURL: imageurl      
          }).then(() => {
              firebase.database().ref('/users/' + firebase.auth().currentUser.uid).update({
              displayName: this.afireauth.auth.currentUser.displayName,
              photoURL: imageurl,
              uid: firebase.auth().currentUser.uid
              }).then(() => {
                  resolve({ success: true });
                  }).catch((err) => {
                      reject(err);
                  })
          }).catch((err) => {
                reject(err);
             })  
      })
      return promise;
  } 
 
}