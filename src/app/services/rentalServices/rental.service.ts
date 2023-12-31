import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from 'src/app/models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44330/api/';

  constructor(private httpClient: HttpClient) { }

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "rentals/getrentaldetails";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  rentTheCar(rental: Rental): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + "rentals/add";
    return this.httpClient.post<ListResponseModel<Rental>>(newPath, rental);
  }
}