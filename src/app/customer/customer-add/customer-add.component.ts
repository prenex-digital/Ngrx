import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import { CustomerState } from 'src/app/models/customer-state';
import { addCustomer } from 'src/app/store/actions/customer.actions';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(private store: Store<CustomerState>) { }

  ngOnInit(): void {
  }

  addCustomer = (customerName: string): void => {
    const customer= new Customer();
    customer.name = customerName;
    this.store.dispatch(addCustomer(customer));
  }

}
