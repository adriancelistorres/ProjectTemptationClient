import { Component } from '@angular/core';
import { CargarscriptService } from '../../services/cargarscript.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(private _cargarScript: CargarscriptService){
    _cargarScript.miScript(["produc/produc"])
  }
}
