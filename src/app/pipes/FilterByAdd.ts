import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByAddress',
})
export class FilterByAddressPipe implements PipeTransform {
  transform(residences: any[], searchAdd: string): any[] {
    if (!residences || !searchAdd) {
      return residences;
    }
    return residences.filter(res =>
      res.address.toLowerCase().includes(searchAdd.toLowerCase())
    );
  }
}
