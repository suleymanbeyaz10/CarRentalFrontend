import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/carDetail';
import { DataResponseModel, ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = 'https://localhost:44330/api/';
  constructor(private httpClient: HttpClient) { }

  getCarDetailsById(carId: number): Observable<DataResponseModel<CarDetail>> {

    let newPath = this.apiUrl + "Cars/getcardetails?carId=" + carId;
    return this.httpClient.get<DataResponseModel<CarDetail>>(newPath)
  }
}
