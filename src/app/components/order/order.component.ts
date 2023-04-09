import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProductcar } from 'src/app/Interfaces/IProductsCar';
import { IOrder } from 'src/app/Interfaces/IOrder';
import { ISaleDetail } from 'src/app/Interfaces/ISaleDetail';
import { SaledetailService } from 'src/app/services/saledetail.service';

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
  selectProduct: IProductcar[] = [];
  totalParcial: number = 0;
  totalGeneral: number = 0;
  lastorden: any

  constructor(private _toastr: ToastrService,
    private _saleDetail: SaledetailService) { }


  ngOnInit(): void {
    this.Datos()
    this.IdentidifarMetodo()

  }

  Datos() {
    this.nombre = localStorage.getItem("name");
    this.apellido = localStorage.getItem("lastname");
    this.dni = localStorage.getItem("dni");
    this.idpay = localStorage.getItem("idpay");
    this.selectProduct = JSON.parse(localStorage.getItem("selectedProduct2") || '{}');
    this.totales()
  }

  IdentidifarMetodo() {
    if (this.idpay == 1) {
      this.metodopay = "Paypal";
    } else if (this.idpay == 2) {
      this.metodopay = "Tarjeta de Credito";
    } else if (this.idpay == 3) {
      this.metodopay = "Yape";
    } else if (this.idpay == 4) {
      this.metodopay = "Plin";
    } else if (this.idpay == 5) {
      this.metodopay = "Tunki";
    }
  }
  totales() {
    this.selectProduct.forEach((element: any) => {
      this.totalParcial = this.totalParcial + (element.price * element.stock)
    });
    let totalGeneral = this.totalParcial * 0.18
    this.totalGeneral = this.totalParcial + totalGeneral
  }


  async FinalizarCompra(): Promise<Boolean> {
    try {
      this.lastorden = await this._saleDetail.getLastOrder().toPromise();

      console.log("Ultima orden obtenido : " + this.lastorden.idorder)
      for (const detalle of this.selectProduct) {
        const newDetalle: ISaleDetail = {
          idorder: this.lastorden?.idorder,
          idproduc: detalle.idproduc,
          discount: 0,
          idsale: 0,
          price_sale: detalle.price * detalle.stock,
          quantity: detalle.stock
        }
        console.log("Nueva venta : " + JSON.stringify(newDetalle))
        await this._saleDetail.addDetailSale(newDetalle).toPromise();
      }
      return true
    } catch (error) {
      console.log("Error en FinalizarCompra: ", error);
      return false
    }
  }


}
