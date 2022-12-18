import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpendingDetailComponent } from './spending-detail/spending-detail.component';

@NgModule({
  declarations: [
    SpendingDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [SpendingDetailComponent]
})
export class SpendingModule { }
