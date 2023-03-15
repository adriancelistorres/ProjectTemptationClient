import { Component } from '@angular/core';
import { IProducts } from '../../../Interfaces/IProducts';
import { CargarscriptService } from '../../../services/cargarscript.service';
import { ProductosService } from '../../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-poleras',
  templateUrl: './prod-poleras.component.html',
  styleUrls: ['./prod-poleras.component.css']
})
export class ProdPolerasComponent {
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
      this.getOnlyPoleras();
    })
  }

  ngOnInit(){
    this.getOnlyPoleras();
  }

  getOnlyPoleras() {
    this._productService.getProducts().subscribe((data: IProducts[]) => 
    {
      this.listProducts = data.filter(op=>op.idcat == 2);
    });
  }

  getOneProduct(id:number){
    this.router.navigate(['/detproducto',id])
    // this.detprodview.getOneProduct(id);
    
  }
}
