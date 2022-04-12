import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDuplicate',
})
export class RemoveDuplicatePipe implements PipeTransform {
  transform(value: any[]): any {
    let result = [];
    if (value !== undefined && value !== null) {
      value.forEach((item) => {
        const sameId = result.find((value) => {
          if (value.id === item.id) {
            return true;
          } else {
            return false;
          }
        });

        if (!sameId) {
          result.push(item);
        }
      });

      return result;
    } else {
      return value;
    }
  }
}
