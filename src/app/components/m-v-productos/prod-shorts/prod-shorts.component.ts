import { Component } from '@angular/core';
import { IProducts } from '../../../Interfaces/IProducts';
import { CargarscriptService } from '../../../services/cargarscript.service';
import { ProductosService } from '../../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-shorts',
  templateUrl: './prod-shorts.component.html',
  styleUrls: ['./prod-shorts.component.css']
})
export class ProdShortsComponent {
  listProducts: IProducts[] = [];
  selectprod: IProducts | any;
  id:any;

  constructor(
    private _cargarScript: CargarscriptService,
    private _productService: ProductosService,
    private router:Router
    ){
    _cargarScript.miScript(["produc/produc"])
    this._productService.RefreshRequired.subscribe((result)=> {
      this.getOnlyShorts();
    })
  }

  ngOnInit(){
    this.getOnlyShorts();
  }

  getOnlyShorts() {
    this._productService.getProducts().subscribe((data: IProducts[]) => 
    {
      this.listProducts = data.filter(op=>op.idcat == 14);
    });
  }

  getOneProduct(id:number){
    this.router.navigate(['/detproducto',id])
    // this.detprodview.getOneProduct(id);
    
  }
}
