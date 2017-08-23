import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealerdetailsPage } from './dealerdetails';

@NgModule({
  declarations: [
    DealerdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DealerdetailsPage),
  ],
})
export class DealerdetailsPageModule {}
