import { Injectable } from '@angular/core';
import { CarResponseModel } from '../../models/carModels/carResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44330/api/cars/getall';
  constructor(private httpClient: HttpClient) { }


  getCars(): Observable<CarResponseModel> {

    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
