import { Component } from '@angular/core';
import { IProducts } from '../../Interfaces/IProducts';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-det-producto',
  templateUrl: './det-producto.component.html',
  styleUrls: ['./det-producto.component.css']
})
export class DetProductoComponent {
  listdetprod: IProducts[] = [];
  selectprod: IProducts | any;
  id:any;

  constructor(
    private _productoService: ProductosService,
    private route: ActivatedRoute
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
}
