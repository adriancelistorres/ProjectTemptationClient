import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  incrementValue() {
    var value = parseInt((<HTMLInputElement>document.getElementById('quantity')).value, 10);
    value = isNaN(value) ? 1 : value;
    value++;
    console.log(value);
    (<HTMLInputElement>document.getElementById('quantity')).value = value.toString();
  }

  decrementValue() {
    var value = parseInt((<HTMLInputElement>document.getElementById('quantity')).value, 10);
    value = isNaN(value) ? 1 : value;
    value < 2 ? value = 1 : '';
    value--;
    console.log(value);
    (<HTMLInputElement>document.getElementById('quantity')).value = value.toString();
  }
}
