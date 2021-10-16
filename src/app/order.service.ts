import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './models/order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = 'api/orders/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl)
  }

  createOrder(order: Order): Observable<Order> {
    order.status = this.genRandStatus();
    return this.http.post<Order>(this.ordersUrl, order, this.httpOptions);
  }

  private genRandStatus(): string {
    const statuses = ["Confirmed", "Processing", "Delivered"]
    return statuses[Math.floor(Math.random() * 3)];
  }
}
