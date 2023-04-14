import { Component } from '@angular/core';
import { Router } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';



const imageUrl = '../../../assets/img/icont2.png'
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-finish-venta',
  templateUrl: './finish-venta.component.html',
  styleUrls: ['./finish-venta.component.css'],
})
export class FinishVentaComponent {
  productos: any[];
  image: any;

  constructor(    private router: Router
    ) {
    // Obtiene los datos del LocalStorage
    const datosLocalStorage = localStorage.getItem('selectedProduct2');
    this.productos = JSON.parse(datosLocalStorage);
  }
  
  generarPDF() {
    
    fetch(imageUrl)
    .then(res => res.blob())
    .then(blob => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        console.log("Imagen",this.image)
        this.image = base64data
 

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const productos = JSON.parse(localStorage.getItem('selectedProduct2'));

    const docDefinition: any = {
      content: [
        {
          image: this.image,
          width: 75,
          absolutePosition: { x: 25, y: 10 }
        },
        {
          text: 'TIENDA TEMPTATION',
          fontSize: 25,
          bold: true,
          alignment: "center",
          absolutePosition: { x: 50, y: 20 },
          margin: [5, 10, 0, 20]

        },
        {
          stack: [
            {
              canvas: [
                {
                  type: 'rect',
                  x: 400,
                  y: -60,
                  w: 120,
                  h: 20,
                  r: 0,
                  lineColor: 'maroon',
                  fillColor: 'white',
                  
                }
              ],            
            },
            {
              text: 'RUC: 17256235854',
              absolutePosition: {x: 450, y: 15}
            }
          ]
        },           
        {
          text: 'Boleta de venta',
          style: 'header'
        },
        {
          stack:[
            {text: `Nombre Completo: ${localStorage.getItem('name')} ${localStorage.getItem('lastname')} `, margin: [0, 2]},
            {text: `DNI: ${localStorage.getItem('dni')}`, margin: [0, 2]},
            {text: `Metodo de Pago: ${localStorage.getItem('metodopay')}`, margin: [0, 2]},
            { text: `Fecha de Emision: ${new Date().toLocaleDateString()}`, margin: [0, 2]}
          ],
          style: 'subheader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['auto', '*', 'auto', 'auto', 'auto'],
            body: [
              [
                'ID',
                'Nombre del producto',
                'Cantidad',
                'Precio unitario',
                'Total'
              ],
              ...productos.map(producto => [
                producto.idproduc,
                producto.name_p,
                producto.stock,
                `$${producto.price}`,
                `$${producto.total}`
              ])
            ]
          },
          layout: 'lightHorizontalLines'
        },
        {
          text: `Total: $${this.calcularTotal(productos).toFixed(2)}`,
          style: 'total'
        }
      ],
      styles: {
        header: {
          fontSize: 20,
          bold: true,
          alignment: 'center',
          margin: [0, 5, 0, 20],
        },
        subheader: {
          fontSize: 14,
          margin: [0, 0, 0, 10]
        },
        total: {
          fontSize: 16,
          bold: true,
          margin: [0, 20, 0, 0]
        }

      }
    };
    

    pdfMake.createPdf(docDefinition).open();
   }}) 
  }

  calcularTotal(productos: any[]): number {
    return productos.reduce((total, producto) => {
      return total + parseFloat(producto.total);
    }, 0);
  }

  borrarStorage() {
    localStorage.removeItem('selectedProduct2');
    this.router.navigate(['/menu']);

  }
}
