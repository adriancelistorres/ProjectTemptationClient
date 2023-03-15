import { Injectable } from '@angular/core';
import {IProductcar} from '../Interfaces/IProductsCar'
@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {

  constructor() { }

  selectProductoc: IProductcar[] = []

  setselectProductoc(productoC: any){
    //this.selectProductoc.push(productoC)
    this.selectProductoc.push(productoC)
    return this.selectProductoc;
  }

  getSelectProduct(){
    return this.selectProductoc
  }

  deleteSelectedProduct(i: number) {
    this.selectProductoc.splice(i, 1);
  }
}
