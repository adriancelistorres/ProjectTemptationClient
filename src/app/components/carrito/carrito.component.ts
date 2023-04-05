import { TemplateBindingParseResult } from '@angular/compiler';
import { ChangeDetectorRef, Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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
  aceptarterminos: boolean = false
  selectedProduct: IProductcar[] = []
  data = []  = [];
  total : Number | any
  selectProduct2: IProductcar[] = [] 
  val: number = 0
  num: number = 0
  variable: string | any
  variableMostrar: Boolean | any ;
  Paginarefresco: boolean| any = true ;

  constructor(
    private sharedDataService: SharedDataServiceService,
     private _toastr: ToastrService,
     private router: Router,){}


  ngOnInit(){

    this.valores()
    this.selectedProduct = this.variable
    console.log("VARIABLE LOCAl",this.variable)
    console.log("Select Product de CARRTIO",this.variable)
    console.log("TOTAL:",this.total)
    this.validaciones()
    this.totales()
  }

  onDeleteSelectedProduct(i: number) {
    console.log("Elemento Eliminado:",i)
    this.selectedProduct.splice(i, 1);
    localStorage.setItem("selectedProduct2",JSON.stringify(this.selectedProduct))
    if(i == 0){
      this.Paginarefresco = false;
      this.validaciones()
    }
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
    const selectedProductLocal = localStorage.getItem("selectedProduct2");
      if ( selectedProductLocal != null) {
        this.variable = JSON.parse(selectedProductLocal);
      }else{
        console.log("No hay datos")
      }
  }

  realizarcompra(){
    if(this.aceptarterminos){
      console.log(this.aceptarterminos)
//      this.router.navigate(['/orden']);
      window.location.href = "/metodopago"
    }else{
      this._toastr.warning("Debe de Seleccionar los terminos y condiciones")
    }
  }


  validaciones(){
    if (this.selectedProduct.length  != 0 ) {
      this.variableMostrar = true
      this.Paginarefresco = false
      console.log("VALIDACION MOSTRAR",this.variableMostrar)
      console.log("Recargar",this.Paginarefresco)
    }else{
      if(this.Paginarefresco == false){
        this.variableMostrar = false
        this.Paginarefresco = true;
        console.log("Recargar",this.Paginarefresco)
        location.reload();
      }
    }
  }
}
