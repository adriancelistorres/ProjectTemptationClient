import { ChangeDetectorRef, Component, OnChanges, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProductcar } from 'src/app/Interfaces/IProductsCar';
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';


interface Prueba{
  image: String | any
  precio: number | any
  cantidad: number | any

}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent {
  searchText: any;
  selectedProduct: IProductcar[] = []
  data = []  = [];
  total : Number | any
  selectProduct2: IProductcar[] = []
  val: number = 0
  num: number = 0
  variable: string | any
 
  constructor(private sharedDataService: SharedDataServiceService, private _toastr: ToastrService){}


  ngOnInit(){

    this.valores()
    this.selectedProduct = this.variable
    console.log("VARIABLE LOCAl",this.variable)
    
    console.log("Select Product de CARRTIO",this.variable)
    //this.total  = this.selectedProduct.reduce((acc, obj) =>acc + (obj.price * obj.stock), 0);
    console.log("TOTAL:",this.total)
    this.totales()
  }

  onDeleteSelectedProduct(i: number) {
    console.log("Elemento Eliminado:",i)
    this.selectedProduct.splice(i, 1); 
    localStorage.setItem("selectedProduct2",JSON.stringify(this.selectedProduct))
    this.totales()
  }


  incrementValue(index: number) {
   
    this.selectedProduct[index].stock++;
    this.selectProduct2 = this.selectedProduct
    this.totales()
    console.log("TOTAL",this.val)
    const valor = this.selectedProduct[index].price * this.selectedProduct[index].stock
    this.selectedProduct[index].total = valor
    console.log("TOTAL EN LISTA", valor)
    localStorage.setItem("selectedProduct2",JSON.stringify(this.selectedProduct))
  }

  decrementValue(index: number) {
    console.log(index)
    console.log(this.selectedProduct[index].stock)
    if (this.selectedProduct[index].stock<= 1) {
      this.selectedProduct[index].stock = 1
      this.selectProduct2 = this.selectedProduct
      localStorage.setItem("selectedProduct2",JSON.stringify(this.selectedProduct))
    } else {
      this.selectedProduct[index].stock--; 
      this.selectProduct2 = this.selectedProduct

      this.totales()
      console.log("TOTAL",this.val)
      const valor = this.selectedProduct[index].price * this.selectedProduct[index].stock
      this.selectedProduct[index].total = valor
      console.log("TOTAL EN LISTA", valor)
      localStorage.setItem("selectedProduct2",JSON.stringify(this.selectedProduct))
    }
  }
  handleInputChange(index: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
      const inputValue = parseInt(inputElement.value);
      this.selectedProduct[index].stock = inputValue;
      this.totales()
      console.log("TOTAL",this.val)

      const valor = this.selectedProduct[index].price * this.selectedProduct[index].stock
      this.selectedProduct[index].total = valor
      console.log("TOTAL EN LISTA",valor)
      localStorage.setItem("selectedProduct2",JSON.stringify(this.selectedProduct))

  }

  totales(){
    this.val = 0
    for(const value of this.selectedProduct){

      this.num = value.price * value.stock
      this.val = this.val + this.num
      this.selectProduct2
      console.log("VALUES",this.val)
      }
    //this.total = this.selectedProduct.reduce((acc,obj,) => acc + (obj.price * obj.stock),0);
    //return this.total;
  }

  valores(){
    const selectedProduct2 = localStorage.getItem("selectedProduct2");
    if (selectedProduct2 !== null) {
    this.variable = JSON.parse(selectedProduct2);
  }
  }
}
