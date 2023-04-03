import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    txtNombre: String | any = "";
    txtApellido: String | any = "";
    txtdni: String | any = "";
    
    ngOnInit(): void {
      this.Datos()
    }

    Datos(){
      this.txtNombre = localStorage.getItem("name");
      this.txtApellido = localStorage.getItem("lastname");
      this.txtdni = localStorage.getItem("dni");
    }

}
