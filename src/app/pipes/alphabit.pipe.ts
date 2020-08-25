import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabit'
})
export class AlphabitPipe implements PipeTransform {

  transform(array: Array<any>): Array<any> {
    array.sort((a: any, b: any) => {
      if (a.lname < b.lname) {
        return -1;
      } else if (a.lname > b.lname) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
