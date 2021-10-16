import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    OrderFormComponent,
    OrdersListComponent,
    OrderDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'order/:productId', component: OrderFormComponent },
      { path: 'orders', component: OrdersListComponent }
    ]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
