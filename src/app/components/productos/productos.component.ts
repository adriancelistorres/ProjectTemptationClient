import { Component, ViewChild } from '@angular/core';
import { CargarscriptService } from '../../services/cargarscript.service';
import { ProductosService } from '../../services/productos.service';
import { IProducts } from '../../Interfaces/IProducts';
import { Router } from '@angular/router';
import { DetProductoComponent } from '../det-producto/det-producto.component';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  listProducts: IProducts[] = [];
  constructor(
    private _cargarScript: CargarscriptService,
    private _productService: ProductosService,
    private router:Router
    ){
    _cargarScript.miScript(["produc/produc"])
    this._productService.RefreshRequired.subscribe((result)=> {
      this.getProducts();
    })
  }

  @ViewChild(DetProductoComponent)detprodview!: DetProductoComponent;

  ngOnInit(){
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe((data: IProducts[]) => {
      this.listProducts = data;
    });
  }

  getOneProduct(id:number){
    this.router.navigate(['/detproducto',id])
    // this.detprodview.getOneProduct(id);
    
  }
}
