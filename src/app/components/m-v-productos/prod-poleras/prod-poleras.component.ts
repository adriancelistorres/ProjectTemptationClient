import { Component } from '@angular/core';
import { IProducts } from '../../../Interfaces/IProducts';
import { CargarscriptService } from '../../../services/cargarscript.service';
import { ProductosService } from '../../../services/productos.service';
import { Router } from '@angular/router';
import { ISize } from '../../../Interfaces/ISize';
import { SizeService } from '../../../services/size.service';

@Component({
  selector: 'app-prod-poleras',
  templateUrl: './prod-poleras.component.html',
  styleUrls: ['./prod-poleras.component.css']
})
export class ProdPolerasComponent {
  listProducts: IProducts[] = [];
  selectprod: IProducts | any;
  id:any;
  listSize: ISize[] = [];
  selectedOption: string[] = ['S', 'M', 'L'];
  isChecked: boolean = false;

  constructor(
    private _cargarScript: CargarscriptService,
    private _productService: ProductosService,
    private router:Router,
    private _sizeService: SizeService,
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

  // miSize() {
  //   this._sizeService.getSize().subscribe(
  //     (option5: any[]) => {
  //       this.listSize = option5.filter(op=>op.state == 1);
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }
  selectSize_S(){
    this._productService.getProducts().subscribe(
      (options: any[]) => {
        this.listProducts = options.filter(option=>option.idsize == 1 && option.idcat == 2);
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
        this.listProducts = options.filter(option=>option.idsize == 2 && option.idcat == 2);
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
        this.listProducts = options.filter(option=>option.idsize == 3 && option.idcat == 2);
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
      this.getOnlyPoleras()
    }
  }
  handleChange2(event: any) {
    this.isChecked = event.target.checked;
    if (this.isChecked) {
      this.selectSize_M()
    } else {
      this.getOnlyPoleras()
    }
  }
  handleChange3(event: any) {
    this.isChecked = event.target.checked;
    if (this.isChecked) {
      this.selectSize_L()
    } else {
      this.getOnlyPoleras()
    }
  }
}
