import { Routes } from '@angular/router';

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
