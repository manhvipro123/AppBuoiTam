import { provideAnimations } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './ngrx/counter/counter.reducer';
import { cartReducer } from './ngrx/cart/cart.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'shopbanhang-a1f4b',
          appId: '1:2402165063:web:594b198e7425d3d3ba2c62',
          storageBucket: 'shopbanhang-a1f4b.appspot.com',
          apiKey: 'AIzaSyDCuwGNveolt9g1v82wbS3jkzNSlDkrh4M',
          authDomain: 'shopbanhang-a1f4b.firebaseapp.com',
          messagingSenderId: '2402165063',
          measurementId: 'G-452GMMTRGY',
        })
      ),
      TuiRootModule
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'shopbanhang-a1f4b',
          appId: '1:2402165063:web:594b198e7425d3d3ba2c62',
          storageBucket: 'shopbanhang-a1f4b.appspot.com',
          apiKey: 'AIzaSyDCuwGNveolt9g1v82wbS3jkzNSlDkrh4M',
          authDomain: 'shopbanhang-a1f4b.firebaseapp.com',
          messagingSenderId: '2402165063',
          measurementId: 'G-452GMMTRGY',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideStorage(() => getStorage())),
    provideStore(),
    provideState({ name: 'counter', reducer: counterReducer }),
    provideState({ name: 'cart', reducer: cartReducer }),
  ],
};
