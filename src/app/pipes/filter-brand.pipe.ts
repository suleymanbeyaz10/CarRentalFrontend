import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'filterBrand'
})
export class FilterBrandPipe implements PipeTransform {

  transform(value: Brand[], filterBrand: string): Brand[] {

    filterBrand = filterBrand ? filterBrand.toLocaleLowerCase() : "";
    return filterBrand ? value.filter((c: Brand) => c.brandName.toLocaleLowerCase().indexOf(filterBrand) !== -1) : value;
  }
}
