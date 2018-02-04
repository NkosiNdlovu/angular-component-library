import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'nullString'})
export class NullString implements PipeTransform {
  transform(value: string): string {

    if(value == null )
      {
        return 'N/A';
      }
      else{
        return value ;
      }
  }
}