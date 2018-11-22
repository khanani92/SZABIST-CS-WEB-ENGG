import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
//Main FireBase Module
import { AngularFireModule } from '@angular/fire';
//Sub FireBase Module
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FireBaseExampleComponent } from './fire-base-example/fire-base-example.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FireBaseExampleComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
        {
          path: 'login',
          component: LoginComponent
        },
        {
        path: 'register',
        component: RegisterComponent
        },
        {
        path: 'fireBaseExample',
        component: FireBaseExampleComponent
        }
      ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
