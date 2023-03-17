import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(values:[]|any , values2:[]|any): Number | any {
    let val: number = 0
    let num: number = 0
    if(values2.stock != values.stock ){
      for(const value of values2){

        num = value.price * value.stock
        val = val + num
        console.log("VALUES",values)
        console.log("VALUES2",values2)
        }
    }  
    return val;
  }

}
