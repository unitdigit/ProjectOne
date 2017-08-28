import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilepicPage } from '../profilepic/profilepic';

@Component({
  selector: 'page-ruralmechanicdetails',
  templateUrl: 'ruralmechanicdetails.html',
})
export class RuralmechanicdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('You are at RuralmechanicdetailsPage');
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