import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CollectionsComponent } from './components/collections/collections.component';

import { MenuComponent } from './components/menu/menu.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetProductoComponent } from './components/det-producto/det-producto.component';
import { PipePipe } from './shared/pipe.pipe';
import { ProdBlusasComponent } from './components/m-v-productos/prod-blusas/prod-blusas.component';
import { ProdPolosComponent } from './components/m-v-productos/prod-polos/prod-polos.component';
import { ProdPolerasComponent } from './components/m-v-productos/prod-poleras/prod-poleras.component';
import { ProdChompasComponent } from './components/m-v-productos/prod-chompas/prod-chompas.component';
import { ProdVestidosComponent } from './components/m-v-productos/prod-vestidos/prod-vestidos.component';
import { ProdJeansComponent } from './components/m-v-productos/prod-jeans/prod-jeans.component';
import { ProdShortsComponent } from './components/m-v-productos/prod-shorts/prod-shorts.component';
import { CollecPrimaveraComponent } from './components/m-collec-productos/collec-primavera/collec-primavera.component';
import { CollecInviernoComponent } from './components/m-collec-productos/collec-invierno/collec-invierno.component';
import { CollecVeranoComponent } from './components/m-collec-productos/collec-verano/collec-verano.component';
import { CollecFallComponent } from './components/m-collec-productos/collec-fall/collec-fall.component';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './components/footer/footer.component';
import { UserRegistroComponent } from './components/m-usuario/user-registro/user-registro.component';
import { LoginComponent } from './components/m-usuario/login/login.component';
import { OrderComponent } from './components/order/order.component';
import {ReclamosComponent} from './components/reclamos/reclamos.component';
import { Pipev2Pipe } from './shared/pipev2.pipe';
import { DetReclamosComponent } from './components/det-reclamos/det-reclamos.component';
import { AddReclamosComponent } from './components/add-reclamos/add-reclamos.component'



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarritoComponent,
    ProductosComponent,
    CollectionsComponent,
    MenuComponent,
    DetProductoComponent,
    PipePipe,
    ProdBlusasComponent,
    ProdPolosComponent,
    ProdPolerasComponent,
    ProdChompasComponent,
    ProdVestidosComponent,
    ProdJeansComponent,
    ProdShortsComponent,
    CollecPrimaveraComponent,
    CollecInviernoComponent,
    CollecVeranoComponent,
    CollecFallComponent,
    FooterComponent,
    UserRegistroComponent,
    LoginComponent,
    OrderComponent,
    ReclamosComponent,
    Pipev2Pipe,
    DetReclamosComponent,
    AddReclamosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,}),
      ReactiveFormsModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
