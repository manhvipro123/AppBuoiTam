import { Route } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ManagementComponent } from './components/management/management.component';

export const LAYOUT_ROUTES: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'management',
        component: ManagementComponent,
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
    ],
  },
];
