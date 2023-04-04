import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IClaims } from 'src/app/Interfaces/IClaims';
import { IOrder } from 'src/app/Interfaces/IOrder';
import { ClaimService } from 'src/app/services/claim.service';
import { OrderService } from 'src/app/services/order.service';
import { ErrorService } from 'src/app/utils/error/error.service';

@Component({
  selector: 'app-add-reclamos',
  templateUrl: './add-reclamos.component.html',
  styleUrls: ['./add-reclamos.component.css']
})
export class AddReclamosComponent {
  listOrder: IOrder[] = [];
  formClaim: FormGroup;
  selectedOption: [] = [];
  // fechaActual: string = new Date().toLocaleDateString();
  fechaActual:string|null = '';
  idperson:any
  

  constructor(
    
    private datePipe: DatePipe,
    private _orderService: OrderService,
    private _claimService: ClaimService,
    private toastr:ToastrService,
    private fb: FormBuilder,
    private _errorService: ErrorService
  ) 
  {
    this.idperson = localStorage.getItem('idperson');
    const currendDate = new Date();
    this.fechaActual = this.datePipe.transform(currendDate, 'yyyy-MM-dd');
    this.formClaim = this.fb.group({
      idorder:['',Validators.required],
      subject:['',Validators.required],
      descripcion:['',Validators.required],
      // date:['',Validators.required],
    });
  }

  ngOnInit(){
    this.miOrder()
  }

  miOrder(){
   this._orderService.getOrders().subscribe((options:any[])=> {
    this.listOrder = options.filter(option => option.idperson == this.idperson);
    console.log("LOG2",this.listOrder)
   },
   (error: any) => {
    console.log(error);
    }
   );
  }

addClaim(){
  const claim: IClaims = {
    idorder:this.formClaim.get('idorder')?.value,
    // idperson:this.formClaim.get('idperson')?.value,
    idperson: this.idperson,
    subject:this.formClaim.get('subject')?.value,
    descripcion:this.formClaim.get('descripcion')?.value,
    date:this.fechaActual,
    image:'',
    state:1
  };
  this._claimService.addClaim(claim).subscribe({
    next: () => {
      this.toastr.success('El reclamo se registro correctamente');
    },
    error: (e: HttpErrorResponse) => {
      this._errorService.msjError(e);
    },
  })
}


















}
