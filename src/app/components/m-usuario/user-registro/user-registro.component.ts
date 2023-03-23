import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IPerson } from 'src/app/Interfaces/IPerson';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-user-registro',
  templateUrl: './user-registro.component.html',
  styleUrls: ['./user-registro.component.css']
})
export class UserRegistroComponent {
  formPerson: FormGroup;
  selectedOption: [] = [];
  listPerson: IPerson[] =[];
  

  constructor(
    private _personService: PersonService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ){
    this.formPerson = this.fb.group({
      idrol: 2,
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      date_b: ['', Validators.required],
      dni: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      //state: ['', Validators.required]
    });
  }

  addPerson(){
    const person: IPerson = {
      idrol: this.formPerson.get('idrol')?.value,
      name: this.formPerson.get('name')?.value,
      lastname: this.formPerson.get('lastname')?.value,
      dni: this.formPerson.get('dni')?.value,
      gender: this.formPerson.get('gender')?.value,
      address: this.formPerson.get('address')?.value,
      date_b: this.formPerson.get('date_b')?.value,
      username: this.formPerson.get('username')?.value,
      password: this.formPerson.get('password')?.value,
      state: 1
    };
    this._personService.addPerson(person).subscribe({next: () =>{
      this.toastr.success('La persona fue registrada correctamente ')
    },
    error: (e: HttpErrorResponse)=>{
      this.toastr.error('Hubo un error en el registro')
    }

    })
  }
}

