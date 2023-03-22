import { Component } from '@angular/core';
import { IProducts } from '../../Interfaces/IProducts';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';
import { ToastrService } from 'node_modules/ngx-toastr';

@Component({
  selector: 'app-det-producto',
  templateUrl: './det-producto.component.html',
  styleUrls: ['./det-producto.component.css']
})
export class DetProductoComponent {
  listdetprod: IProducts[] = [];
  selectprod: IProducts | any;
  id:any;
  selectedProduct: any;
  selectedProduct2: any;
  quantity: number = 1;

  constructor(
    private _productoService: ProductosService,
    private route: ActivatedRoute,
    private sharedDataService: SharedDataServiceService,
    private _toastr: ToastrService


  ){

  }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('idproduc');
    console.log(this.id)
     this.getOneProduct(this.id)
  }

  getOneProduct(id:number){
    this._productoService.getOneProduct(id).subscribe((data:IProducts) =>{
      this.selectprod = data;
      console.log(id) 
    })
    this.id = id
    console.log("LOG1",this.id)
  }

  /*Piero parte */

  selectProductCarrito(){
    this._productoService.getOneProduct(this.id).subscribe(product => {
      this.selectedProduct = {
          idproduc : this.id,
          name_p: product.name_p,
          stock: this.quantity,
          price: product.price,
          image_using: product.image_using ,
          total : product.price * this.quantity,
      };
      // const localget : any = localStorage.getItem("selectedProduct2")
      // const general = JSON.parse(localget);
      // const nombp  = Object.getOwnPropertyNames(general)[0]
      // console.log("GENERAL",general)
      
      // console.log("LOCALGET:",localget)
      // console.log("NOMBp:",nombp)
      
        this.sharedDataService.setselectProductoc(this.selectedProduct); 
        console.log("LOG SELECT DETALLEPRODUCTO",this.selectedProduct);
        this.selectedProduct2 = this.sharedDataService.getSelectProduct()
        localStorage.setItem("selectedProduct2",JSON.stringify(this.selectedProduct2))
        this._toastr.success("Producto Añadido al Carrito")

      const localget: any = localStorage.getItem("selectedProduct2");
      const productos = JSON.parse(localget); 
      for (let i = 0; i < productos.length; i++) {
        console.log("IDENTIFICADOR NP",productos[i].name_p); 
      }
    });
  }
}
