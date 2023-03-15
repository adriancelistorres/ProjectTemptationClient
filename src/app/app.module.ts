import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { CargarscriptService } from './services/cargarscript.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetProductoComponent } from './components/det-producto/det-producto.component';
import { PipePipe } from './shared/pipe.pipe';
import { ProdBlusasComponent } from './components/m-v-productos/prod-blusas/prod-blusas.component';
import { ProdPolosComponent } from './components/m-v-productos/prod-polos/prod-polos.component';
import { ProdPolerasComponent } from './components/m-v-productos/prod-poleras/prod-poleras.component';
import { ProdChompasComponent } from './components/m-v-productos/prod-chompas/prod-chompas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarritoComponent,
    ProductosComponent,
    CollectionsComponent,
    DetProductoComponent,
    PipePipe,
    ProdBlusasComponent,
    ProdPolosComponent,
    ProdPolerasComponent,
    ProdChompasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CargarscriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
