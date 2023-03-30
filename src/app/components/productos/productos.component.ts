import { Component, OnInit, ViewChild } from '@angular/core';
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
  listProducts: IProducts[] = [];
  listSize: ISize[] = [];
  selectedOption: string[] = ['S', 'M', 'L'];
  isChecked: boolean = false;
  tallaSeleccionada: string|any;
  colorSeleccionada: String | any
  listcolor: IColor[] = []
  idcolor: any|undefined;
  idsize: any|undefined;
  constructor(
    private _productService: ProductosService,
    private router:Router,
    private _sizeService: SizeService,
    private _colorservice: ColorService,
    ){

  }

  // @ViewChild(DetProductoComponent)detprodview!: DetProductoComponent;

  ngOnInit(){
    this.getProducts();
    this.miSize();
    this.micolor();
    this.SizeColorDetector();
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

  /*Piero Avance */
  handleidSizeChange(event: any){
    const isChecked = event.target.checked;
    if(isChecked){
      this.tallaSeleccionada = event.target.value;
      console.log("SIZE",this.tallaSeleccionada)
    }else{
      this.tallaSeleccionada = null
    }
    this.SizeColorDetector()
  }

    /*Piero Avance */
    handleidColorChange(event: any){
      const isChecked = event.target.checked;
      if(isChecked){
        this.colorSeleccionada = event.target.value;
        console.log("COLOR",this.colorSeleccionada)
      }else{
        this.colorSeleccionada = null
      }
      this.SizeColorDetector()
    }

    SizeColorDetector(){

      if(this.colorSeleccionada != null && this.tallaSeleccionada != null){
        this.handleComboChange(this.tallaSeleccionada,this.colorSeleccionada);
      }else if(this.colorSeleccionada != null){
        this._productService.getProducts().subscribe(
          (options: any[]) => {
            this.listProducts = options.filter(option=>option.idcolor == this.colorSeleccionada);
            console.log("LOG1",this.listProducts)
          },
          (error: any) => {
            console.log(error);
          }
        );
      }else if(this.tallaSeleccionada != null){
        this._productService.getProducts().subscribe(
          (options: any[]) => {
            this.listProducts = options.filter(option=>option.idsize == this.tallaSeleccionada);
            console.log("LOG1",this.listProducts)
          },
          (error: any) => {
            console.log(error);
          }
        );
      }else{
        this.getProducts();
      }


    }

  handleComboChange(size: any, color: any){
        if(color!= null && size != null){
          console.log("COlOR",this.colorSeleccionada)
          console.log("SIZE",this.tallaSeleccionada)
          this._productService.getProducts().subscribe(
            (options: any[]) => {
              this.listProducts = options.filter(option=>option.idsize == size && option.idcolor == color);
              console.log("LOG1",this.listProducts)
            },
            (error: any) => {
              console.log("ERROR DE METODO COMBO",error);
            }
          );
      }
    }
}
