import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customerModels/customer';
import { CustomerService } from 'src/app/services/customerServices/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  dataLoaded = false;
  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response.data;
      this.dataLoaded = true;
    });
  }
}