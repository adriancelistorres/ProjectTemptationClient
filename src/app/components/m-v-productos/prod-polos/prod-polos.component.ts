import { Component } from '@angular/core';
import { IProducts } from '../../../Interfaces/IProducts';
import { CargarscriptService } from '../../../services/cargarscript.service';
import { ProductosService } from '../../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-polos',
  templateUrl: './prod-polos.component.html',
  styleUrls: ['./prod-polos.component.css']
})
export class ProdPolosComponent {
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
      this.getOnlyPolos();
    })
  }

  ngOnInit(){
    this.getOnlyPolos();
  }

  getOnlyPolos() {
    this._productService.getProducts().subscribe((data: IProducts[]) => 
    {
      this.listProducts = data.filter(op=>op.idcat == 1);
    });
  }

  getOneProduct(id:number){
    this.router.navigate(['/detproducto',id])
    // this.detprodview.getOneProduct(id);
    
  }

}

