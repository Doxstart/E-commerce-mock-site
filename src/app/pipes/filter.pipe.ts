import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string, filterSelect: string): any[] {

    if (!value || filterString === '' || propName === '' ) {
      return value;
    }

    const filteredArray: any[] = value.filter((a: any) => {
      const lowerCaseProp = a[propName].trim().toLowerCase();
      const lowerCaseFilter = filterString.trim().toLowerCase();

      if (filterSelect === 'Starts with') {
        return lowerCaseProp.startsWith(lowerCaseFilter);
      } else if (filterSelect === 'Ends with') {
        return lowerCaseProp.endsWith(lowerCaseFilter);
      } else if (filterSelect === 'Equal to') {
        return lowerCaseProp === lowerCaseFilter;
      } else if (filterSelect === 'Includes') {
        return lowerCaseProp.includes(lowerCaseFilter);
      }

      return true;
    });

    return filteredArray;
  }

}
