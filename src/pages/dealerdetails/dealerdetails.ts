import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilepicPage } from '../profilepic/profilepic';

@Component({
  selector: 'page-dealerdetails',
  templateUrl: 'dealerdetails.html',
})
export class DealerdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealerdetailsPage');
  }

  editProfile(){
    this.navCtrl.push(ProfilepicPage);
    console.log("Profile edited");
  }

  saveProfile(){
    console.log("Profile saved");
    this.navCtrl.pop();
  }
  
}

