import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IOrder } from 'src/app/Interfaces/IOrder';
import { IPaymentMethod } from 'src/app/Interfaces/IPaymentMethod';
import { OrderService } from 'src/app/services/order.service';
import { PaymethodService } from 'src/app/services/paymethod.service';

@Component({
  selector: 'app-metodopago',
  templateUrl: './metodopago.component.html',
  styleUrls: ['./metodopago.component.css']
})
export class MetodopagoComponent implements OnInit {
  MetodoPagaSelecciona: string|any;
  listPayMethod : IPaymentMethod[] = [];
  idpay: any = 0;
  isChecked: boolean  = true;
  isCheckedVal: boolean  = false;
  formPay: FormGroup;
  idperson = localStorage.getItem("idperson");

  constructor(
    private _paymethodService: PaymethodService,
    private _toastr: ToastrService,
    private fb: FormBuilder,
    private _orderService: OrderService,
    private router: Router,
    private datePipe:DatePipe
  ) { 
    this.formPay = this.fb.group({
      cuantaPaypal: ['',Validators.required],
      contraseñaPaypal: ['',Validators.required],
      numTarjeta: ['',Validators.required],
      ClaveTarjeta: ['',Validators.required],
      MesExpiracion: ['',Validators.required],
      AñoExpiracion: ['',Validators.required],
      ComprobanteYape: ['',Validators.required],
      ComprobantePlin: ['',Validators.required],
      ComprobanteTunki: ['',Validators.required]
    })
  }

  ngOnInit(
    
  ): void {
    this.GetPayMethod();
  }
  GetPayMethod(){
    this._paymethodService.getpayMethod().subscribe(
      (option: any[]) => {
        this.listPayMethod = option.filter(op=>op.state == 1);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  handleOptionChange(event: any) {
    const isChecked = event.target.checked;
    if(isChecked){
      this.isChecked = false
      this.idpay = event.target.value;
    }else{
      this.idpay = 0;
      this.isChecked = true
    }
    console.log(this.idpay);
  }
  validacionidpay1(){
    
    // const cuantaPaypal = this.formPay.get('cuantaPaypal')?.value;
    // const contraseñaPaypal = this.formPay.get('contraseñaPaypal')?.value;

    // if(cuantaPaypal == "" || contraseñaPaypal == "" ){
    //   this._toastr.warning("Complete los campos requeridos")
    //   console.log("Realizado Incorrectamente")
    // }else{
    //   console.log("Realizado correctamente")
    //   this.isCheckedVal = true;
    //   this.agregarOrder()
    //   this.realizarcompra()

    // }
    this.isCheckedVal = true;
    this.agregarOrder()
    this.realizarcompra()

  }


  validacionidpay2(){
    
    const numeroTarjeta = this.formPay.get('numTarjeta')?.value;
    const mesexpiracion = this.formPay.get('MesExpiracion')?.value;
    const añoexpiracion = this.formPay.get('AñoExpiracion')?.value;
    const claveTarjeta = this.formPay.get('ClaveTarjeta')?.value;

    if(numeroTarjeta == "" || mesexpiracion == "" || añoexpiracion == "" || claveTarjeta == ""){
      this._toastr.warning("Complete los campos requeridos")
      console.log("Realizado Incorrectamente")
    }else{
      console.log("Realizado correctamente")
      this.isCheckedVal = true;
      this.agregarOrder()
      this.realizarcompra()

    }

  }
  validacionidpay3(){
    const comprobanteYape = this.formPay.get('ComprobanteYape')?.value;
    if(comprobanteYape == ""){
      this._toastr.warning("Complete los campos requeridos")
      console.log("Realizado Incorrectamente")
    }else{
      console.log("Realizado correctamente")
      this.isCheckedVal = true;
      this.agregarOrder()
      this.realizarcompra()
    }
  }
  validacionidpay4(){
    const comprobantePlin = this.formPay.get('ComprobantePlin')?.value;
    if(comprobantePlin == ""){
      this._toastr.warning("Complete los campos requeridos")
      console.log("Realizado Incorrectamente")
    }else{
      console.log("Realizado correctamente")
      this.isCheckedVal = true;
      this.agregarOrder()
      this.realizarcompra()
    }
  }
  validacionidpay5(){
    const comprobanteTunki = this.formPay.get('ComprobanteTunki')?.value;
    if(comprobanteTunki == ""){
      this._toastr.warning("Complete los campos requeridos")
      console.log("Realizado Incorrectamente")
    }else{
      console.log("Realizado correctamente")
      this.isCheckedVal = true;
      this.agregarOrder()
      this.realizarcompra()
    }

  }

  realizarcompra(){
    if(this.isCheckedVal){
      this.idpay = localStorage.setItem("idpay",this.idpay)
      console.log(this.isChecked)
      this.router.navigate(['/orden']);
//      window.location.href = "/orden"
      
    }else{
      this._toastr.warning("No selecciono Correctamente un Metodo de Pago")
    }
  }


  agregarOrder(){
    
    const order: IOrder = {
      idperson: this.idperson,
      idpay : parseInt(this.idpay),
      dateorder : this.datePipe.transform(new Date, 'yyyy-MM-dd HH:mm:ss'),
      state : 1
    };
    this._orderService.addOrder(order).subscribe({next:() =>{
      this._toastr.success("Se agrego correctamente");
    },
    error: (e: HttpErrorResponse)=>{
      this._toastr.error('Hubo un error en el registro')
    }
  })
  }
}
