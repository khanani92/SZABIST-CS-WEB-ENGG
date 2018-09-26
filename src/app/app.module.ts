import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
         {
            path: 'login',
            component: LoginComponent
         },
         {
          path: 'register',
          component: RegisterComponent
       }
      ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
