import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { ProductService } from '../../../../services/product/product.service';
import { Store } from '@ngrx/store';
import * as CartActions from '../../../../ngrx/cart/cart.actions';
import { ProductModel } from '../../../../models/product.model';
import { DocumentData } from '@angular/fire/firestore';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  constructor(public productService: ProductService, private store: Store) {}

  ngOnInit(): void {}

  buy(product: DocumentData) {
    this.store.dispatch(
      CartActions.addProduct({ product: product as ProductModel })
    );
  }
}
