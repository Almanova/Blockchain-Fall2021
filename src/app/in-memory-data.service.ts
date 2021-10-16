import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Order } from './models/order';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const orders = [
    ];
    return {orders};
  }

  genId(orders: Order[]): number {
    return orders.length > 0 ? Math.max(...orders.map(order => order.id)) + 1 : 1;
  }
}
