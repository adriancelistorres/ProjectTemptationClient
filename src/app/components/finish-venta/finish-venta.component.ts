import { Component } from '@angular/core';
import { Router } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import 'jspdf-autotable';
import { FLOAT } from 'html2canvas/dist/types/css/property-descriptors/float';



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
  nombre: any
  dni: any
  metodopay: any
  totalSub: any = 0
  totalGeneral: any = 0
  totlaIDB: any = 0
  

  constructor(    private router: Router
    ) {
    // Obtiene los datos del LocalStorage
    const datosLocalStorage = localStorage.getItem('selectedProduct2');
    this.productos = JSON.parse(datosLocalStorage);
    this.nombre = `${localStorage.getItem('name')} ${localStorage.getItem('lastname')}`
    this.dni = localStorage.getItem('dni');
    this.metodopay = localStorage.getItem('metodopay');
    this.totalSub = this.calcularTotal(this.productos).toFixed(2)
    this.totlaIDB = (this.totalSub * 0.18)
    this.totalGeneral = (parseFloat(this.totalSub) + parseFloat( this.totlaIDB))



  }


  public downloadPDF(): void {
    const imageUrl = '../../../assets/img/icontemp.png';

    fetch(imageUrl)
    .then(res => res.blob())
    .then(blob => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        console.log("Imagen",this.image)
        this.image = base64data


    const totalSub  = `${this.calcularTotal(this.productos).toFixed(2)}`
    const Total = ` ${(this.totalGeneral)}`
    const persom = localStorage.getItem('name')
    const fecha  = new Date().toLocaleDateString();
    const doc = new jsPDF('p','pt','a4');
    const options = {
      background: 'white',
      scale: 3
    }
    doc.setFont('times', 'bold');
    doc.setFontSize(20);
    doc.text('BOLETA DE VENTA', doc.internal.pageSize.getWidth() / 2, 50, { align: 'center' });

    doc.setFillColor(160, 82, 45); 
    doc.rect(455, 45, 100, 20, 'F'); 
    

    doc.setFont('times', 'bold');
    doc.setFontSize(12);
    doc.setFillColor(250, 250, 250); 
    doc.setDrawColor(162, 116, 77);
    doc.rect(455, 25, 100, 20, 'FD'); 
    doc.setTextColor(0, 0, 0);
    doc.text(' RUC: 1234567890', 455, 40); 

    doc.setFont('times', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(255, 0, 0);
    doc.text(`Datos de Usuario:`,50, doc.internal.pageSize.getHeight() - 730);
    doc.setTextColor(0, 0, 0);
    doc.text(`Cliente: ${this.nombre}`,50, doc.internal.pageSize.getHeight() - 710);
    doc.text(`DNI: ${this.dni}`,50, doc.internal.pageSize.getHeight() - 690);
    doc.text(`Metodo de Pago: ${this.metodopay} `,50, doc.internal.pageSize.getHeight() - 670);
    doc.setTextColor(255, 0, 0);
    doc.text(`Datos de Venta:`,50, doc.internal.pageSize.getHeight() - 650);
    doc.setTextColor(0, 0, 0);

    doc.autoTable({
      head: [['ID', 'Nombre del producto', 'Cantidad', 'Precio unitario', 'SubTotal']],
      body: this.productos.map(producto => [producto.idproduc, producto.name_p, producto.stock, `S/${producto.price}`, `S/${producto.total}`]),
      startY: 200,
      headStyles: {
        fillColor: '#8B4513', 
        textColor: '#fff', 
        didParseCell: function(data) {
          data.cell.styles.fontSize = 14;
          data.cell.styles.fontStyle = 'bold';
        }
      },
      didDrawPage: function(data: { startX: number, startY: number, table: any, settings: { margin: { left: number } } }) {
        // Dibujar los textos debajo de la tabla sin superponerlos
        const dato = ""+totalSub
        const dato2 = ""+Total
        console.log("DATA",dato)
        console.log("DATA",dato2)
        const subTotal = 'SubTotal: S/'+dato;
        const igv = `IGV: 0.18`;
        const total = 'Total: S/'+dato2;
        const { startX, startY, table } = data;
        const lineHeight = table && table.body && table.body.length > 0 ? table.body[0].height : 0;
        const totalTableHeight = table.body.reduce((acc, curr) => acc + curr.height, 0);
        const startYs =  totalTableHeight + lineHeight + 220;
        const startXs =50;
        console.log("lineHeight",lineHeight)
        console.log("STARX",startXs)
        console.log("STARY",startYs)
        doc.setFontSize(12);
        doc.text(subTotal, startXs, startYs);
        doc.text(igv, startXs, startYs + lineHeight);
        doc.text(total, startXs, startYs + 2 * lineHeight);

      },
    }
    );


  

    doc.addImage(this.image, 'png', 45, 15, 90, 55);

    doc.save(`Boleta de venta ${persom}-${fecha}.pdf`);
  }})
  }



  // generarPDF() {
    
  //   fetch(imageUrl)
  //   .then(res => res.blob())
  //   .then(blob => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(blob);
  //     reader.onloadend = () => {
  //       const base64data = reader.result;
  //       console.log("Imagen",this.image)
  //       this.image = base64data
 

  //   pdfMake.vfs = pdfFonts.pdfMake.vfs;

  //   const productos = JSON.parse(localStorage.getItem('selectedProduct2'));
  //   const name = localStorage.getItem('name');
  //   const lastname = localStorage.getItem('lastname');
  //   // const imageDictionary ={
  //   //   image1: '../../../assets/img/iconvest.jpg',
  //   //   image2: '../../../assets/img/icontemp.png'
  //   // } 
  //   const docDefinition: any = {
  //     content: [
  //       {
  //         image: this.image,
  //         width: 75,
  //         absolutePosition: { x: 25, y: 10 }
  //       },
  //       {
  //         text: 'TIENDA TEMPTATION',
  //         fontSize: 25,
  //         bold: true,
  //         alignment: "center",
  //         absolutePosition: { x: 50, y: 20 },
  //         margin: [5, 10, 0, 20]

  //       },
  //       {
  //         stack: [
  //           {
  //             canvas: [
  //               {
  //                 type: 'rect',
  //                 x: 400,
  //                 y: -50,
  //                 w: 120,
  //                 h: 20,
  //                 r: 0,
  //                 lineColor: 'maroon',
  //                 fillColor: 'white',
                  
  //               }
  //             ],            
  //           },
  //           {
  //             text: 'RUC: 17256235854',
  //             absolutePosition: {x: 450, y: 25}
  //           }
  //         ]
  //       },           
  //       {
  //         text: 'Boleta de venta',
  //         style: 'header'
  //       },
  //       {
  //         stack:[
  //           {text: `Nombre Completo: ${localStorage.getItem('name')} ${localStorage.getItem('lastname')} `, margin: [0, 2]},
  //           {text: `DNI: ${localStorage.getItem('dni')}`, margin: [0, 2]},
  //           {text: `Metodo de Pago: ${localStorage.getItem('metodopay')}`, margin: [0, 2]},
  //           { text: `Fecha de Emision: ${new Date().toLocaleDateString()}`, margin: [0, 2]}
  //         ],
  //         style: 'subheader'
  //       },
  //       {
  //         text: `Cliente: ${name} ${lastname}`,
  //         style: 'subheader'
  //       },
  //       {
  //         table: {
  //           headerRows: 1,
  //           widths: ['auto', '*', 'auto', 'auto', 'auto'],
  //           body: [
  //             [
  //               'ID',
  //               'Nombre del producto',
  //               'Cantidad',
  //               'Precio unitario',
  //               'Total'
  //             ],
  //             ...productos.map(producto => [
  //               producto.idproduc,
  //               producto.name_p,
  //               producto.stock,
  //               `$${producto.price}`,
  //               `$${producto.total}`
  //             ])
  //           ]
  //         },
  //         layout: 'lightHorizontalLines'
  //       },
  //       {
  //         text: `Total: $${this.calcularTotal(productos).toFixed(2)}`,
  //         style: 'total'
  //       }
  //     ],
  //     styles: {
  //       header: {
  //         fontSize: 20,
  //         bold: true,
  //         alignment: 'center',
  //         margin: [0, 5, 0, 20],
  //       },
  //       subheader: {
  //         fontSize: 14,
  //         margin: [0, 0, 0, 10]
  //       },
  //       total: {
  //         fontSize: 16,
  //         bold: true,
  //         margin: [0, 20, 0, 0]
  //       }

  //     }
  //   };
    

  //   pdfMake.createPdf(docDefinition).open();

  //  }}) 

  // }

  calcularTotal(productos: any[]): number {
    return productos.reduce((total, producto) => {
      return total + parseFloat(producto.total);
    }, 0);
  }

  borrarStorage() {
    localStorage.removeItem('selectedProduct2');
    this.router.navigate(['/menu']);

  }

  // getImageObject(imageUrl: string): ContentImage {
  //   const image = {
  //     width: 300,
  //     height: 300,
  //     image: imageUrl
  //   };
  //   console.log(image)
  //   return image;
  // }
}
