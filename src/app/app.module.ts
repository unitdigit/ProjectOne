import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ChatPage } from '../pages/chat/chat';
import { SignupPage } from '../pages/signup/signup';
import { ProfilepicPage } from '../pages/profilepic/profilepic';
import { PasswordresetPage } from '../pages/passwordreset/passwordreset';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ApplicationformPage } from '../pages/applicationform/applicationform';  

import { DealerdetailsPage } from '../pages/dealerdetails/dealerdetails';
import { RetailermechanicdetailsPage } from '../pages/retailermechanicdetails/retailermechanicdetails';
import { RuralmechanicdetailsPage } from '../pages/ruralmechanicdetails/ruralmechanicdetails';

import { DealerlistPage } from '../pages/dealerlist/dealerlist';
import { RetailermechaniclistPage } from '../pages/retailermechaniclist/retailermechaniclist';
import { RuralmechaniclistPage } from '../pages/ruralmechaniclist/ruralmechaniclist';

import { DealerformPage } from '../pages/dealerform/dealerform';
import { RetailerformPage } from '../pages/retailerform/retailerform';
import { RuralmechanicformPage } from '../pages/ruralmechanicform/ruralmechanicform';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';

import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';


var config = {
    apiKey: "AIzaSyAM8d2BSDlcSsEoN71b6o_g4OOiEiRFEXQ",
    authDomain: "chatapp-97803.firebaseapp.com",
    databaseURL: "https://chatapp-97803.firebaseio.com",
    projectId: "chatapp-97803",
    storageBucket: "chatapp-97803.appspot.com",
    messagingSenderId: "208926047388"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  	ChatPage,
  	PasswordresetPage,
  	SignupPage,
  	ProfilepicPage,
    DashboardPage,
    ApplicationformPage,
    DealerdetailsPage,
    RetailermechanicdetailsPage,
    RuralmechanicdetailsPage,
    DealerlistPage,
    RetailermechaniclistPage,
    RuralmechaniclistPage,
    DealerformPage,
    RetailerformPage,
    RuralmechanicformPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
	 	AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    PasswordresetPage,
    SignupPage,
    ProfilepicPage,
    DashboardPage,
    ApplicationformPage,
    DealerdetailsPage,
    RetailermechanicdetailsPage,
    RuralmechanicdetailsPage,
    DealerlistPage,
    RetailermechaniclistPage,
    RuralmechaniclistPage,
    DealerformPage,
    RetailerformPage,
    RuralmechanicformPage
  ],
  providers: [
    StatusBar,
    SplashScreen, File,
    FilePath,
    FileChooser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImghandlerProvider
  ]
})
export class AppModule {}
