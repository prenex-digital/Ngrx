import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { StoreModule } from '@ngrx/store';
import { customerFeatureKey, reducer } from '../store/reducers/customer.reducer';
import { CustomerAddComponent } from './customer-add/customer-add.component';

@NgModule({
  declarations: [
    CustomerViewComponent,
    CustomerAddComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeatureKey, reducer)
  ],
  exports: [
    CustomerViewComponent,
    CustomerAddComponent
  ]
})
export class CustomerModule { }
