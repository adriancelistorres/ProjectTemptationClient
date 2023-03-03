import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CollectionsComponent } from './components/collections/collections.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarritoComponent,
    ProductosComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
