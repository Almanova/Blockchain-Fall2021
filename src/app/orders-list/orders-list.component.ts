import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  public orders: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(result => {
      this.orders = result
    });
  }
}
