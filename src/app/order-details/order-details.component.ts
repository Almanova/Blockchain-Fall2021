import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @Input() order: Order;
  
  public showStatus: boolean = false;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  viewStatus() {
    this.showStatus = this.showStatus ? false : true;
  }
}
