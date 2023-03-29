import { Component, OnInit, ViewChild } from '@angular/core';
import { CargarscriptService } from '../../services/cargarscript.service';
import { ProductosService } from '../../services/productos.service';
import { IProducts } from '../../Interfaces/IProducts';
import { Router } from '@angular/router';
import { DetProductoComponent } from '../det-producto/det-producto.component';
import { ISize } from '../../Interfaces/ISize';
import { SizeService } from '../../services/size.service';
import { IColor } from 'src/app/Interfaces/IColor';
import { ColorService } from 'src/app/services/color.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  tallas = ['S', 'M', 'L', 'XL']
  tallaSeleccionada: string|any;
  listProducts: IProducts[] = [];
  listSize: ISize[] = [];
  listcolor: IColor[] = []
  selectedOption: string[] = ['S', 'M', 'L'];
  isChecked: boolean = false;
  idcolor: any|undefined;
  idsize: any|undefined;
  constructor(
    private _cargarScript: CargarscriptService,
    private _productService: ProductosService,
    private router:Router,
    private _sizeService: SizeService,
    private _colorservice: ColorService,
    ){
    _cargarScript.miScript(["produc/produc"])
    this._productService.RefreshRequired.subscribe((result)=> {
      this.getProducts();
    })
  }

  // @ViewChild(DetProductoComponent)detprodview!: DetProductoComponent;

  ngOnInit(){
    this._cargarScript.miScript(["produc/produc"])
    this.getProducts();
    this.miSize();
    this.micolor();
  
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

  /*Piero Avance */
  handleidSizeChange(event: any){
    const isChecked = event.target.checked;
    const idsize = event.target.value;
    if(isChecked){
      this.idsize = idsize;
      console.log(idsize)
      this._productService.getProducts().subscribe(
        (options: any[]) => {
          this.listProducts = options.filter(option=>option.idsize == idsize);
          console.log("LOG1",this.listProducts)
        },
        (error: any) => {
          console.log(error);
        }
      )
    }else{
      this.getProducts();
    }    
  }

    /*Piero Avance */
    handleidColorChange(event: any){
      const isChecked = event.target.checked;
      const idcolor = event.target.value;
      if(isChecked){
        this.idcolor = idcolor;
        console.log("IDCOLOR",idcolor)
        this._productService.getProducts().subscribe(
          (options: any[]) => {
            
            this.listProducts = options.filter(option=>option.idcolor == idcolor);
            console.log("LOG1",this.listProducts)
          },
          (error: any) => {
            console.log(error);
          }
        )
      }else{
        this.getProducts();
      }   
    }

  miSize() {
    this._sizeService.getSize().subscribe(
      (option5: any[]) => {
        this.listSize = option5.filter(op=>op.state == 1);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  micolor(){
    this._colorservice.getColors().subscribe(
      (option5: any[]) => {
        this.listcolor = option5.filter(op=>op.state == 1);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }


  // selectSize_S(){
  //   this._productService.getProducts().subscribe(
  //     (options: any[]) => {
  //       this.listProducts = options.filter(option=>option.idsize == 1);
  //       console.log("LOG1",this.listProducts)
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }
  // selectSize_M(){
  //   this._productService.getProducts().subscribe(
  //     (options: any[]) => {
  //       this.listProducts = options.filter(option=>option.idsize == 2);
  //       console.log("LOG1",this.listProducts)
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }
  // selectSize_L(){
  //   this._productService.getProducts().subscribe(
  //     (options: any[]) => {
  //       this.listProducts = options.filter(option=>option.idsize == 3);
  //       console.log("LOG1",this.listProducts)
  //     },
  //     (error: any) => {
  //       console.log(error);
  //     }
  //   );
  // }


  // handleChange(event: any) {
  //   this.isChecked = event.target.checked;
  //   if (this.isChecked) {
  //     this.selectSize_S()
  //   }else if(this.isChecked){
  //     this.selectSize_M();
  //   } 
  //   else {
  //     this.getProducts()
  //   }
  // }
  // handleChange2(event: any) {
  //   this.isChecked = event.target.checked;
  //   if (this.isChecked) {
  //     this.selectSize_M()
  //   } else {
  //     this.getProducts()
  //   }
  // }
  // handleChange3(event: any) {
  //   this.isChecked = event.target.checked;
  //   if (this.isChecked) {
  //     this.selectSize_L()
  //   } else {
  //     this.getProducts()
  //   }
  // }

  // handleChange(event: any) {
  //   this.isChecked = event.target.checked;
  //   if (this.isChecked && this.selectedOption[0]) {
  //     console.log("LOG2:",this.selectedOption[0])
  //     this.selectSize_S()
  //   }else if(this.isChecked && this.selectedOption[1])
  //   {
  //     this.selectSize_M()
  //     console.log("LOG3:",this.selectedOption[1])
  //   } else if(this.isChecked && this.selectedOption[2])
  //   {
  //     this.selectSize_L()
  //   } 
  //   else {
  //     this.getProducts()
  //   }
  // }


  // SelectSize(){
  //   if (this.selectedOption.includes('S')) {
  //     this.selectSize_S()
  //   }
  //   if (this.selectedOption.includes('M')) {
  //     this.selectSize_M()
  //   }
  //   if (this.selectedOption.includes('L')) {
  //     this.selectSize_L()
  //   }
  // }
}
