import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IPerson } from 'src/app/Interfaces/IPerson';
import { PersonService } from 'src/app/services/person.service';
import { IPersonUpdate } from 'src/app/Interfaces/IPersonUpdate';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/utils/error/error.service';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent {
  formPerson: FormGroup;
  id:number

  ngOnInit(): void {
      this.getDataPerson();
    }
  constructor(
    private _personaService:PersonService,
    private fb:FormBuilder,
    private toastr:ToastrService,
    private router:Router,
    private _errorService:ErrorService
  ){
    this.id=parseInt(localStorage.getItem("idperson"));
    this.formPerson=this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      date_b: ['', Validators.required],
      dni: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      newpassword:[''],
      email: ['',Validators.required]
    })
  }


  getDataPerson(){
    this._personaService.getOnePerson(this.id).subscribe(
      (data:IPerson)=>{
        this.formPerson.setValue({
          name: data.name,
          lastname: data.lastname,
          date_b: data.date_b,
          dni: data.dni,
          gender: data.gender,
          address: data.address,
          username: data.username,
          password: '',
          newpassword:'',
          email: data.email
        })
      },(error:any)=>{
        console.log(error)
      }
    )
  }


  updatePerson(){
    var newPass=""
    if(this.formPerson.get('newpassword')?.value==""){
      newPass=this.formPerson.value.password
    }else{
      newPass=this.formPerson.value.newpassword
    }
    const person:IPersonUpdate={
        idperson:parseInt(localStorage.getItem("idperson")),
        name: this.formPerson.get('name')?.value,
        idrol:2,
        lastname: this.formPerson.get('lastname')?.value,
        dni: this.formPerson.get('dni')?.value,
        gender: this.formPerson.get('gender')?.value,
        address: this.formPerson.get('address')?.value,
        date_b: this.formPerson.get('date_b')?.value,
        username: this.formPerson.get('username')?.value,
        password: this.formPerson.get('password')?.value,
        newpassword:newPass,
        email: this.formPerson.get('email')?.value,
        state: 1
    };
    console.log(person)
    this._personaService.updatePerson(this.id,person).subscribe({next:()=>{
      this.toastr.success('Actualización exitosa')
      this._personaService.RefreshRequired.next();
      setTimeout(()=>{
        location.reload();
      },4000)
    },error:(e:HttpErrorResponse)=>{
      this._errorService.msjError(e);
    }})
  }

}