import { Component } from '@angular/core';
import { IClaims } from '../../Interfaces/IClaims';
import { ClaimService } from '../../services/claim.service';

@Component({
  selector: 'app-det-reclamos',
  templateUrl: './det-reclamos.component.html',
  styleUrls: ['./det-reclamos.component.css']
})
export class DetReclamosComponent {

  id: number;
  listClaim2: IClaims[] =[];
  selectClaim: IClaims | any;

  constructor(
    private _claimsService: ClaimService
  ){
    this.id = 0
  }

  getOneClaimmm(id: number){
    console.log("INGRESANDO A METODO HIJOS")
    this._claimsService.getOneClaims(id).subscribe((data: IClaims) =>{
      this.selectClaim = data;
      console.log(this.listClaim2)
    })
  }
}
