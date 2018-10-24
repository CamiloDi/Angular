import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { app_routing } from './app.routes';


//Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
