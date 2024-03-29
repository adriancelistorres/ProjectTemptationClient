import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CollectionsComponent } from './components/collections/collections.component';

import { MenuComponent } from './components/menu/menu.component';

import { DetProductoComponent } from './components/det-producto/det-producto.component';
import { ProdBlusasComponent } from './components/m-v-productos/prod-blusas/prod-blusas.component';
import { ProdPolosComponent } from './components/m-v-productos/prod-polos/prod-polos.component';
import { ProdPolerasComponent } from './components/m-v-productos/prod-poleras/prod-poleras.component';
import { ProdChompasComponent } from './components/m-v-productos/prod-chompas/prod-chompas.component';
import { ProdVestidosComponent } from './components/m-v-productos/prod-vestidos/prod-vestidos.component';
import { ProdShortsComponent } from './components/m-v-productos/prod-shorts/prod-shorts.component';
import { ProdJeansComponent } from './components/m-v-productos/prod-jeans/prod-jeans.component';
import { CollecPrimaveraComponent } from './components/m-collec-productos/collec-primavera/collec-primavera.component';
import { CollecVeranoComponent } from './components/m-collec-productos/collec-verano/collec-verano.component';
import { CollecInviernoComponent } from './components/m-collec-productos/collec-invierno/collec-invierno.component';
import { CollecFallComponent } from './components/m-collec-productos/collec-fall/collec-fall.component';
import { UserRegistroComponent } from './components/m-usuario/user-registro/user-registro.component';
import { LoginComponent } from './components/m-usuario/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { ReclamosComponent } from './components/reclamos/reclamos.component';
import { MetodopagoComponent } from './components/m-metodopago/metodopago/metodopago.component';
import { FinishVentaComponent } from './components/finish-venta/finish-venta.component';
import { VerPerfilComponent } from './components/m-usuario/ver-perfil/ver-perfil.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'menu', pathMatch: 'full' },
  {path: 'login', component: LoginComponent },
  {path: 'menu', component: MenuComponent },
  {path: 'car', component: CarritoComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'colecciones', component: CollectionsComponent},
  {path: 'detproducto/:idproduc', component: DetProductoComponent},
  {path: 'productos/blusas', component: ProdBlusasComponent},
  {path: 'productos/polos', component: ProdPolosComponent},
  {path: 'productos/poleras', component: ProdPolerasComponent},
  {path: 'productos/chompas', component: ProdChompasComponent},
  {path: 'productos/vestidos', component: ProdVestidosComponent},
  {path: 'productos/shorts', component: ProdShortsComponent},
  {path: 'productos/jeans', component: ProdJeansComponent},
  {path: 'productos/primavera', component: CollecPrimaveraComponent},
  {path: 'productos/verano', component: CollecVeranoComponent},
  {path: 'productos/invierno', component: CollecInviernoComponent},
  {path: 'productos/otono', component: CollecFallComponent},
  {path: "registro",component: UserRegistroComponent},
  {path: 'orden', component: OrderComponent },
  {path: 'reclamos',component: ReclamosComponent},
  {path: 'metodopago',component:MetodopagoComponent},
  {path: 'finish-venta',component:FinishVentaComponent},
  {path:'perfil',component:VerPerfilComponent,canActivate:[AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
