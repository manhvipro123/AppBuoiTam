import { createReducer, on } from '@ngrx/store';
import { CartState } from './cart.state';
import * as CartActions from './cart.actions';

export const initialState: CartState = {
  cart: {
    createdAt: new Date().toString(),
    id: '1',
    productList: [],
    total: 0,
    userId: '1',
  },
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addProduct, (state, action) => {
    // console.log(action.product);
    //make product list unique
    let productList = [...state.cart.productList];
    let product = action.product;
    let isProductExist = false;
    productList.forEach((p) => {
      if (p.id === product.id) {
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      productList.push({ ...product, quantity: 1 });
    }
    return {
      ...state,
      cart: {
        ...state.cart,
        productList: productList,
        total: productList.reduce((total, product) => {
          return total + product.price * product.quantity;
        }, 0),
        createdAt: Date.now().toString(),
      },
    };
  }),
  on(CartActions.updateProduct, (state, action) => {
    let productList = [...state.cart.productList];
    let product = action.product;
    console.log(product);
    productList = productList.map((p) => {
      if (p.id === product.id) {
        console.log('match');
        p = {
          ...p,
          quantity: product.quantity,
        };
        return p;
      }
      return p;
    });
    return {
      ...state,
      cart: {
        ...state.cart,
        productList: productList,
        total: productList.reduce((total, product) => {
          return total + product.price * product.quantity;
        }, 0),
        createdAt: Date.now().toString(),
      },
    };
  }),
  on(CartActions.removeProduct, (state, action) => {
    console.log(action.id);
    let productList = [...state.cart.productList];
    productList = productList.filter((product) => {
      return product.id !== action.id;
    });
    return {
      ...state,
      cart: {
        ...state.cart,
        productList: productList,
        total: productList.reduce((total, product) => {
          return total + product.price * product.quantity;
        }, 0),
        createdAt: Date.now().toString(),
      },
    };
  }),
  on(CartActions.clearCart, (state) => {
    return {
      ...state,
      cart: {
        ...state.cart,
        productList: [],
        total: 0,
        createdAt: Date.now().toString(),
      },
    };
  })
);
