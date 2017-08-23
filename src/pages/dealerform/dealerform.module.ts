import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealerformPage } from './dealerform';

@NgModule({
  declarations: [
    DealerformPage,
  ],
  imports: [
    IonicPageModule.forChild(DealerformPage),
  ],
})
export class DealerformPageModule {}
