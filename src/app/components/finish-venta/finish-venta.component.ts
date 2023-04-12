import { Component } from '@angular/core';
import { Router } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-finish-venta',
  templateUrl: './finish-venta.component.html',
  styleUrls: ['./finish-venta.component.css'],
})
export class FinishVentaComponent {
  productos: any[];

  constructor(    private router: Router
    ) {
    // Obtiene los datos del LocalStorage
    const datosLocalStorage = localStorage.getItem('selectedProduct2');
    this.productos = JSON.parse(datosLocalStorage);
  }
  generarPDF() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const productos = JSON.parse(localStorage.getItem('selectedProduct2'));

    const docDefinition: any = {
      content: [
        {
          text: 'Boleta de venta',
          style: 'header'
        },
        {
          text: `Fecha: ${new Date().toLocaleDateString()}`,
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
          fontSize: 22,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 20]
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
