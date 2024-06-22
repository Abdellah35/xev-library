import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BooksModule } from './features/books/books.module';
import { UsersModule } from './features/users/users.module';
import { CoreModule } from './core/core.module';
import { AuthGuardService } from './core/services/auth-guard.service';


import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    UsersModule,
    CoreModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
    ],
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({"projectId":"xev-library","appId":"1:499045684580:web:91ffe054c0236323ae1671","storageBucket":"xev-library.appspot.com","apiKey":"AIzaSyAhQS3S1CexyW3pPjKIIl9hK2kP0Fav7Xw","authDomain":"xev-library.firebaseapp.com","messagingSenderId":"499045684580"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
