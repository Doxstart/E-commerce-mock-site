import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'collapse'
})
export class CollapsePipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {

    const numberOfChars = args[0] ? args[0] : 25;

    if (value.length < numberOfChars) {
      return value;
    }
    const collapseDescr = value.slice(0, numberOfChars)
    return collapseDescr + '...';
  }

}
