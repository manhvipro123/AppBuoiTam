import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../../models/product.model';

export const addProduct = createAction(
  '[Cart Component] Add Product',
  props<{ product: ProductModel }>()
);
export const removeProduct = createAction(
  '[Cart Component] Remove Product',
  props<{ id: string }>()
);
export const updateProduct = createAction(
  '[Cart Component] Update Product',
  props<{ product: ProductModel }>()
);
export const clearCart = createAction('[Cart Component] Clear Cart');
