import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import {getApp, initializeApp, provideFirebaseApp} from '@angular/fire/app'
import {getAuth, initializeAuth, provideAuth, indexedDBLocalPersistence} from '@angular/fire/auth'
import {getDatabase, provideDatabase} from '@angular/fire/database'  
import {getFirestore, provideFirestore} from '@angular/fire/firestore'
import {Capacitor} from '@capacitor/core'

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: "AIzaSyCSPexRN_gH4yG1Tl1tpF4W7FsD3fjUkIU",
          authDomain: "ionic-app-3e306.firebaseapp.com",
          databaseURL: "https://ionic-app-3e306-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "ionic-app-3e306",
          storageBucket: "ionic-app-3e306.appspot.com",
          messagingSenderId: "795472618482",
          appId: "1:795472618482:web:e2313fcaa1f45dca1a416b"
        })
    ),
      provideDatabase(() => getDatabase(),)
    ),
    importProvidersFrom(
      provideAuth(() => {
        if (Capacitor.isNativePlatform()) {
          return initializeAuth(getApp(), {persistence: indexedDBLocalPersistence,});
        } else {
          return getAuth();
        }
      }
    )
    )
  ],
});
