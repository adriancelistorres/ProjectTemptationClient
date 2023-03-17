import { Component } from '@angular/core';
import { IProducts } from '../../../Interfaces/IProducts';
import { CargarscriptService } from '../../../services/cargarscript.service';
import { ProductosService } from '../../../services/productos.service';
import { Router } from '@angular/router';
import { ISize } from '../../../Interfaces/ISize';

@Component({
  selector: 'app-prod-shorts',
  templateUrl: './prod-shorts.component.html',
  styleUrls: ['./prod-shorts.component.css']
})
export class ProdShortsComponent {
  listProducts: IProducts[] = [];
  selectprod: IProducts | any;
  id:any;
  listSize: ISize[] = [];
  selectedOption: string[] = ['S', 'M', 'L'];
  isChecked: boolean = false;

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

  selectSize_S(){
    this._productService.getProducts().subscribe(
      (options: any[]) => {
        this.listProducts = options.filter(option=>option.idsize == 1 && option.idcat == 14);
        console.log("LOG1",this.listProducts)
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  selectSize_M(){
    this._productService.getProducts().subscribe(
      (options: any[]) => {
        this.listProducts = options.filter(option=>option.idsize == 2 && option.idcat == 14);
        console.log("LOG1",this.listProducts)
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  selectSize_L(){
    this._productService.getProducts().subscribe(
      (options: any[]) => {
        this.listProducts = options.filter(option=>option.idsize == 3 && option.idcat == 14);
        console.log("LOG1",this.listProducts)
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  handleChange(event: any) {
    this.isChecked = event.target.checked;
    if (this.isChecked) {
      this.selectSize_S()
    }else if(this.isChecked){
      this.selectSize_M();
    } 
    else {
      this.getOnlyShorts()
    }
  }
  handleChange2(event: any) {
    this.isChecked = event.target.checked;
    if (this.isChecked) {
      this.selectSize_M()
    } else {
      this.getOnlyShorts()
    }
  }
  handleChange3(event: any) {
    this.isChecked = event.target.checked;
    if (this.isChecked) {
      this.selectSize_L()
    } else {
      this.getOnlyShorts()
    }
  }
}
