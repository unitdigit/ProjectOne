import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilepicPage } from '../profilepic/profilepic';

@Component({
  selector: 'page-retailermechanicdetails',
  templateUrl: 'retailermechanicdetails.html',
})
export class RetailermechanicdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetailermechanicdetailsPage');
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
