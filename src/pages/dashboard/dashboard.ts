import { Component } from '@angular/core';
import {  NavController, NavParams, } from 'ionic-angular';
import { DealerlistPage } from '../dealerlist/dealerlist';
import { RetailermechaniclistPage } from '../retailermechaniclist/retailermechaniclist';
import { RuralmechaniclistPage } from '../ruralmechaniclist/ruralmechaniclist';

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

  dealerList(){
    this.navCtrl.push(DealerlistPage);
  }

  retailerMechanicList(){
    this.navCtrl.push(RetailermechaniclistPage);
  }

  ruralMechanicList(){
    this.navCtrl.push(RuralmechaniclistPage);
  }

/*  chat(){
    this.navCtrl.push(ChatPage,{
   username:this.username
   });*/
  }