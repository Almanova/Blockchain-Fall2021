import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, products } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProducts(): Observable<Product[]> {
    return of(products);
  }

  public getById(id: number): Observable<Product> {
    return of(products[id]);
  }
}
