import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';
import { Car } from '../models/car';

@Pipe({
  name: 'filterCar'
})
export class FilterCarPipe implements PipeTransform {

  transform(value: Car[], filterCar: string): Car[] {

    filterCar = filterCar ? filterCar.toLocaleLowerCase() : "";
    return filterCar ? value.filter((c: Car) => c.name.toLocaleLowerCase().indexOf(filterCar) !== -1) : value;
  }

}
