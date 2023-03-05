import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path: '', redirectTo: 'menu', pathMatch: 'full' },
  {path: 'menu', component: MenuComponent },
  {path: 'car', component: CarritoComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'colecciones', component: CollectionsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
