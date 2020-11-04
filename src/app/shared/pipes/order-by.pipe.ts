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
    if (!(array instanceof Array && array.length)) {
      return [];
    }
    const multipler = descending ? -1 : 1;

    const getValue = (object: T, selector: string): any => {
      const keys = selector.split('.');
      for (const key of keys) {
        object = object[key];
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
