import { Component } from '@angular/core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent {
  constructor() {}
  ngOnInit() {}

  createPDF() {
    const documentDefinition: any = {
      content: [
        { text: 'This is an sample PDF printed with pdfMake' }
      ],
    };
    pdfMake.createPdf(documentDefinition).open();
  }
}
