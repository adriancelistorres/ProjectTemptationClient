import { Component, OnInit } from '@angular/core';
import { IProductcar } from 'src/app/Interfaces/IProductsCar';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    nombre: String | any = "";
    apellido: String | any = "";
    dni: String | any = "";
    idpay: any = 0;
    metodopay: any = "";
    selectProduct : IProductcar[] = [];
    totalParcial : number = 0;
    totalGeneral: number = 0;
    
    ngOnInit(): void {
      this.Datos()
      this.IdentidifarMetodo()
     
    }

    Datos(){
      this.nombre = localStorage.getItem("name");
      this.apellido = localStorage.getItem("lastname");
      this.dni = localStorage.getItem("dni");
      this.idpay = localStorage.getItem("idpay");
      this.selectProduct = JSON.parse(localStorage.getItem("selectedProduct2") || '{}');
      this.totales()
    }

    IdentidifarMetodo(){
      if(this.idpay == 1){
        this.metodopay = "Paypal";
      }else if(this.idpay == 2){
        this.metodopay = "Tarjeta de Credito";
      }else if(this.idpay == 3){
        this.metodopay = "Yape";
      }else if(this.idpay == 4){
        this.metodopay = "Plin";
      }else if(this.idpay == 5){
        this.metodopay = "Tunki";
      }
    }
    totales(){
      this.selectProduct.forEach((element: any) => {
        this.totalParcial = this.totalParcial + (element.price * element.stock)
      });
      let totalGeneral = this.totalParcial * 0.18
      this.totalGeneral = this.totalParcial + totalGeneral
    }

}
