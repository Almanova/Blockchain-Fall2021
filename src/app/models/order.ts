import { Product } from "./product";

export interface Order {
    id: number;
    product: Product;
    orderDate: Date;
    amount: number;
    weight: string;
    sendDate: Date;
    deliveryDate: Date;
    status: string;
}
 