import { Component, ViewChild } from '@angular/core';
import { IClaims } from '../../Interfaces/IClaims';
import { ClaimService } from '../../services/claim.service';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from '../../utils/error/error.service';
import { DetReclamosComponent } from '../det-reclamos/det-reclamos.component';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.css']
})
export class ReclamosComponent {

  listreclamos: IClaims [] = [];
  searchText:any;

  constructor(
    private _claimsService: ClaimService,
    private toastr:ToastrService,
    private _errorService: ErrorService
    )
  {
    this._claimsService.RefreshRequired.subscribe(result =>{
      this.getOnlyClaimPerson();
    })
  }

  @ViewChild(DetReclamosComponent)detailview!: DetReclamosComponent;

  ngOnInit(): void {
    this.getOnlyClaimPerson();
  }

  GetOneClaim2(id: number) {
    this.detailview.getOneClaimmm(id);
    console.log(id)
  }                                     

  getOnlyClaimPerson() {
    this._claimsService.getClaims().subscribe((data: IClaims[]) => 
    {
      this.listreclamos = data.filter(op=>op.idperson == 6);
    });
  }
}
