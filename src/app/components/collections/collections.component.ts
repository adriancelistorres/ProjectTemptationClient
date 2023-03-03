import { Component } from '@angular/core';
import { CargarscriptService } from '../../services/cargarscript.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent {
  constructor(private _cargarScript: CargarscriptService){
    _cargarScript.miScript(["collecion/collecion"])
  }
}
