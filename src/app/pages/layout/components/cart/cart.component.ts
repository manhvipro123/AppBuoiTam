import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { CartModel } from '../../../../models/product.model';
import { FormControl } from '@angular/forms';
import { CartState } from '../../../../ngrx/cart/cart.state';
import { Store } from '@ngrx/store';
import * as CartActions from '../../../../ngrx/cart/cart.actions';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cart: CartModel = {
    createdAt: new Date().toString(),
    id: '1',
    productList: [],
    total: 0,
    userId: '1',
  };

  cart$ = this.store.select('cart', 'cart');

  quantityFormList: FormControl[] = [];

  constructor(private store: Store<{ cart: CartState }>) {}

  ngOnInit(): void {
    this.cart$.subscribe((cart) => {
      if (cart) {
        this.cart = {
          ...this.cart,
          productList: cart.productList,
          total: cart.total,
        };
        cart.productList.forEach((product) => {
          this.quantityFormList.push(new FormControl(product.quantity));
        });
      }
    });
    this.quantityFormList.forEach((form, index) => {
      form.valueChanges.subscribe((value) => {
        this.updateQuantity(index, value);
      });
    });
  }

  count(quantity: number, price: number) {
    return Math.ceil(quantity * price);
  }

  countTotal() {
    let total = 0;
    this.cart.productList.forEach((product, index) => {
      total += this.count(product.quantity, product.price);
    });
    return total;
  }

  updateQuantity(index: number, quantity: number) {
    this.store.dispatch(
      CartActions.updateProduct({
        product: {
          ...this.cart.productList[index],
          quantity: quantity,
        },
      })
    );
  }

  removeProduct(index: number) {
    this.store.dispatch(
      CartActions.removeProduct({ id: this.cart.productList[index].id })
    );
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart());
  }
}
