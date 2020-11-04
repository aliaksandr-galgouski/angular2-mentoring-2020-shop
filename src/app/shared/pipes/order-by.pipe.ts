import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: true,
})
export class OrderByPipe implements PipeTransform {
  transform<T>(
    array: Array<T>,
    propertySelector: string,
    descending: boolean = true
  ): Array<T> {
    if (!(array instanceof Array && array.length)) return [];
    const multipler = descending ? -1 : 1;

    const getValue = (object: T, selector: string): any => {
      const keys = selector.split('.');
      for (var i = 0; i < keys.length; i++) {
        object = object[keys[i]];
      }

      return object;
    };

    return array.sort((one: T, other: T) => {
      const oneProp = getValue(one, propertySelector);
      const otherProp = getValue(other, propertySelector);
      return multipler * (oneProp < otherProp ? -1 : +(oneProp > otherProp));
    });
  }
}
