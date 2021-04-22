import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from './../reducers/customer.reducer';
import { CustomerState } from './../../models/customer-state';


export const selectCustomerState = createFeatureSelector<CustomerState>(
    fromCustomer.customerFeatureKey
);

export const selectCustomers = createSelector(
    selectCustomerState,
    (state: CustomerState) => state.customers
)
