import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { ChatPage } from '../pages/chat/chat';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, private afAuth: AngularFireAuth, private statusBar: StatusBar, private splashScreen: SplashScreen) {
 /* this.afAuth.authState.subscribe(auth => {
      if (!auth)
        this.rootPage = HomePage;
      else
        this.rootPage = ChatPage; 
    });*/
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

