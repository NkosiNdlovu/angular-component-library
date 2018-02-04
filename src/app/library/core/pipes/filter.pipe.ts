import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], field : string, value : any): any[] {  
      if (!items) return [];
      
      if (typeof(value) === "boolean") {
        var test = items.filter(it => it[field] === value);
        return items.filter(it => it[field] === value);
      }

      if (!value || value.length == 0) return items;

      return items.filter(it => 
      it[field].toLowerCase().indexOf(value.toLowerCase()) !=-1);
    }
}