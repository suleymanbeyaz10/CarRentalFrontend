import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from 'src/app/models/carDetail';
import { DataResponseModel } from 'src/app/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = 'https://localhost:44330/api/';
  constructor(private httpClient: HttpClient) { }

  getCarDetailsById(carId: number): Observable<DataResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "Cars/getcardetails?carId=" + carId;
    const headers = new HttpHeaders().set('Cache-Control', 'no-cache');
    return this.httpClient.get<DataResponseModel<CarDetail>>(newPath, { headers });
  }

  // getCarImagesByCarId(carId: number): Observable<DataResponseModel<string[]>> {
  //   let newPath = this.apiUrl + "CarImages/getimagebycarid?carId=" + carId;
  //   return this.httpClient.get<DataResponseModel<string[]>>(newPath);
  // }
}
