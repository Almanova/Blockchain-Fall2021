import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { OrderService } from '../order.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  public product: Product;

  public orderForm = new FormGroup({
    amount: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    sendDate: new FormControl('', Validators.required),
    deliveryDate: new FormControl('', Validators.required)
  });

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService, 
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productService.getById(params['productId'] - 1).subscribe(result => {
        this.product = result;
      })
    });
  }

  onSubmit() {
    let order: Order = this.orderForm.getRawValue();
    order.product = this.product;
    order.orderDate = new Date();

    this.orderService.createOrder(order).subscribe();
    if (window.confirm("Your order has been placed! Go to orders?")) {
      this.router.navigateByUrl("/orders")
    } else {
      this.router.navigateByUrl("/")
    }
  }
}
