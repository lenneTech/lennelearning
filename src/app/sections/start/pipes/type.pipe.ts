import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type',
})
export class TypePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.filter((item) => {
      return item.type.includes(args);
    });
  }
}
