import { Component } from '@angular/core';
import { IProducts } from '../../../Interfaces/IProducts';
import { ISize } from '../../../Interfaces/ISize';
import { CargarscriptService } from '../../../services/cargarscript.service';
import { ProductosService } from '../../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collec-fall',
  templateUrl: './collec-fall.component.html',
  styleUrls: ['./collec-fall.component.css']
})
export class CollecFallComponent {
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
      this.getOnlyFall();
    })
  }

  ngOnInit(){
    this.getOnlyFall();
  }

  getOnlyFall() {
    this._productService.getProducts().subscribe((data: IProducts[]) => 
    {
      this.listProducts = data.filter(op=>op.idstyles == 6);
    });
  }

  getOneProduct(id:number){
    this.router.navigate(['/detproducto',id])
    // this.detprodview.getOneProduct(id);
    
  }

  selectSize_S(){
    this._productService.getProducts().subscribe(
      (options: any[]) => {
        this.listProducts = options.filter(option=>option.idsize == 1 && option.idstyles == 6);
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
        this.listProducts = options.filter(option=>option.idsize == 2 && option.idstyles == 6);
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
        this.listProducts = options.filter(option=>option.idsize == 3 && option.idstyles == 6);
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
      this.getOnlyFall()
    }
  }
  handleChange2(event: any) {
    this.isChecked = event.target.checked;
    if (this.isChecked) {
      this.selectSize_M()
    } else {
      this.getOnlyFall()
    }
  }
  handleChange3(event: any) {
    this.isChecked = event.target.checked;
    if (this.isChecked) {
      this.selectSize_L()
    } else {
      this.getOnlyFall()
    }
  }

}
