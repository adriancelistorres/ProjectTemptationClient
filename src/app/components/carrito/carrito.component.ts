import { ChangeDetectorRef, Component, OnChanges, SimpleChanges } from '@angular/core';


interface Prueba{
  image: String | any
  precio: number | any
  cantidad: number | any

}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent {

  prueba: Prueba[] = [
    {image: "imagen grande.png", precio : 12.6, cantidad: 15},
    {image: "imagen grande.png", precio : 15.9, cantidad: 31},
    {image: "imagen grande.png", precio : 20.3, cantidad: 56},
    {image: "imagen grande.png", precio : 30.5, cantidad: 20}
  ]




  incrementValue(index: number) {
    this.prueba[index].cantidad++;
  }

  decrementValue(index: number) {
    console.log(index)
    console.log(this.prueba[index].cantidad)
    if (this.prueba[index].cantidad<= 1) {
      this.prueba[index].cantidad = 1
    } else {
      this.prueba[index].cantidad--; 
    }
  }
  handleInputChange(index: number, event: Event) {
    const inputElement = event.target as HTMLInputElement;
      const inputValue = parseInt(inputElement.value);
      this.prueba[index].cantidad = inputValue;

  }
}
