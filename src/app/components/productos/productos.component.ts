import { Component } from '@angular/core';
import { CargarscriptService } from '../../services/cargarscript.service';
import { ProductosService } from '../../services/productos.service';
import { IProducts } from '../../Interfaces/IProducts';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  listProducts: IProducts[] = [];
  constructor(
    private _cargarScript: CargarscriptService,
    private _productService: ProductosService
    ){
    _cargarScript.miScript(["produc/produc"])
    this._productService.RefreshRequired.subscribe((result)=> {
      this.getProducts();
    })
  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe((data: IProducts[]) => {
      this.listProducts = data;
    });
  }
}
