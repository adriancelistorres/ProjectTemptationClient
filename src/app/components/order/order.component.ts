import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProductcar } from 'src/app/Interfaces/IProductsCar';
import { IOrder } from 'src/app/Interfaces/IOrder';
import { ISaleDetail } from 'src/app/Interfaces/ISaleDetail';
import { SaledetailService } from 'src/app/services/saledetail.service';
import {
  IPayPalConfig,
  ICreateOrderRequest
} from 'ngx-paypal'
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  nombre: String | any = '';
  apellido: String | any = '';
  dni: String | any = '';
  idpay: any = 0;
  metodopay: any = '';
  selectProduct: IProductcar[] = [];
  totalParcial: number = 0;
  totalGeneral: number = 0;
  lastorden: any;
  paypal: any;
  @ViewChild('paypal', { static: true }) paypalElement?: ElementRef;
  public payPalConfig ? : IPayPalConfig;
  showSuccess = false;
  showCancel = false;
  showError = false;
  final: any = 0;

  constructor(
    private _toastr: ToastrService,
    private _saleDetail: SaledetailService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.Datos();
    this.IdentidifarMetodo();
    this.initConfig();


    // this.paypal.Buttons({
    //   createOrder: (data: any, actions: any) => {
    //     return actions.order.create({
    //       purchase_units: [
    //         {
    //           amount: {
    //             value: this.totalGeneral,
    //             currency_code: 'USD',
    //           },
    //         },
    //       ],
    //     });
    //   },
    // }).render(this.paypalElement?.nativeElement);



  }
  private initConfig(): void {
    console.log('new final',this.totalGeneral/3);
    this.final=(this.totalGeneral/3.75).toFixed(2);
    console.log('new final2',this.final);
    this.payPalConfig = {
        currency: 'USD',
        clientId: 'ARTnmJCkESNr5HkzsXoFK_o8VRA_LnqiznqTllnbTmNBDM68LYmhsEFERv7Dm5eqNgGODaKoQIYKHY44',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value:`${this.final}`,
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value:`${this.final}`,
                          }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'USD',
                        value:`${this.final}`,
                      },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data:any, actions:any) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then((details:any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });
            this.FinalizarCompra();
            // this._toastr.success('Compra hecha exitosamete');

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            this.showSuccess = true;
            // this._toastr.success('Compra hecha exitosamete');

        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            this.showCancel = true;


        },
        onError: err => {
            console.log('OnError', err);
            this.showError = true;

        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
            // this.resetStatus();
            // this._toastr.success('Compra hecha exitosamete');

        }
    };
}

  Datos() {
    this.nombre = localStorage.getItem('name');
    this.apellido = localStorage.getItem('lastname');
    this.dni = localStorage.getItem('dni');
    this.idpay = localStorage.getItem('idpay');
    this.selectProduct = JSON.parse(
      localStorage.getItem('selectedProduct2') || '{}'
    );
    this.totales();
  }

  IdentidifarMetodo() {
    if (this.idpay == 1) {
      this.metodopay = 'Paypal';
    } else if (this.idpay == 2) {
      this.metodopay = 'Tarjeta de Credito';
    } else if (this.idpay == 3) {
      this.metodopay = 'Yape';
    } else if (this.idpay == 4) {
      this.metodopay = 'Plin';
    } else if (this.idpay == 5) {
      this.metodopay = 'Tunki';
    }
  }
  totales() {
    this.selectProduct.forEach((element: any) => {
      this.totalParcial = this.totalParcial + element.price * element.stock;
    });
    let totalGeneral = this.totalParcial * 0.18;
    this.totalGeneral = this.totalParcial + totalGeneral;
  }



  async FinalizarCompra(): Promise<void> {
    try {
      this.lastorden = await this._saleDetail.getLastOrder().toPromise();

      console.log('Ultima orden obtenido : ' + this.lastorden.idorder);
      for (const detalle of this.selectProduct) {
        const newDetalle: ISaleDetail = {
          idorder: this.lastorden?.idorder,
          idproduc: detalle.idproduc,
          discount: 0,
          idsale: 0,
          price_sale: detalle.price * detalle.stock,
          quantity: detalle.stock,
        };
        await this._saleDetail.addDetailSale(newDetalle).toPromise();
      }
      this._toastr.success('Compra hecha exitosamete');
      localStorage.removeItem('selectedProduct2');
      this.router.navigate(['/finish-venta']);


    } catch (error) {
      console.log('Error en FinalizarCompra: ', error);
    }
  }
}
