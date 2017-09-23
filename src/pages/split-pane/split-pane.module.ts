import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplitPanePage } from './split-pane';

@NgModule({
  declarations: [
    SplitPanePage,
  ],
  imports: [
    IonicPageModule.forChild(SplitPanePage),
  ],
  exports: [
    SplitPanePage
  ]
})
export class SplitPanePageModule {}
