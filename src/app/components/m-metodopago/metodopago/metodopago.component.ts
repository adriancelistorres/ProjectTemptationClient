import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IPaymentMethod } from 'src/app/Interfaces/IPaymentMethod';
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

  constructor(
    private _paymethodService: PaymethodService,
    private _toastr: ToastrService,
    private fb: FormBuilder
  ) { 
    this.formPay = this.fb.group({
      numTarjeta: ['',Validators.required],
      ClaveTarjeta: ['',Validators.required],
      MesExpiracion: ['',Validators.required],
      AñoExpiracion: ['',Validators.required],
      ComprobanteYape: ['',Validators.required],
      ComprobantePlin: ['',Validators.required],
      ComprobanteTunki: ['',Validators.required]
    })
  }

  ngOnInit(): void {
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
      this.realizarcompra()
    }

  }

  realizarcompra(){
    if(this.isCheckedVal){
      this.idpay = localStorage.setItem("idpay",this.idpay)
      console.log(this.isChecked)
      window.location.href = "/orden"
    }else{
      this._toastr.warning("No selecciono Correctamente un Metodo de Pago")
    }
  }


}
