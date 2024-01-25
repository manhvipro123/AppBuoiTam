import { Route } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';

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
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
    ],
  },
];
