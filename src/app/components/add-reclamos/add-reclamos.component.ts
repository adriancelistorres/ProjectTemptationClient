import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IClaims } from 'src/app/Interfaces/IClaims';
import { ClaimService } from 'src/app/services/claim.service';
import { ErrorService } from 'src/app/utils/error/error.service';

@Component({
  selector: 'app-add-reclamos',
  templateUrl: './add-reclamos.component.html',
  styleUrls: ['./add-reclamos.component.css']
})
export class AddReclamosComponent {
  listClaim: IClaims[] = [];
  formClaim: FormGroup;

  constructor(
    // private _orderService: ,
    private toastr:ToastrService,
    private fb: FormBuilder,
    private _errorService: ErrorService
  ) 
  {
    this.formClaim = this.fb.group({
      idorder:['',Validators.required],
      subject:['',Validators.required],
      description:['',Validators.required],
      date:['',Validators.required],
    });
  }

  ngOnInit(){

  }

  miOrder(){
  }
}
