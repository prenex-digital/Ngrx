import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerState } from 'src/app/models/customer-state';
import { addCustomer } from 'src/app/store/actions/customer.actions';
import { selectCustomers } from 'src/app/store/selector/customer.selectors';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customers$: Observable<Customer[]>;

  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers))
  }

  ngOnInit(): void {
  }

  addCustomer = (customerName: string): void => {
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(addCustomer(customer));
  }

}
