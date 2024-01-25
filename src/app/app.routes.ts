import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.routes').then((mod) => mod.LOGIN_ROUTES),
  },
  {
    path: 'base',
    loadChildren: () =>
      import('./pages/layout/layout.routes').then((mod) => mod.LAYOUT_ROUTES),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
