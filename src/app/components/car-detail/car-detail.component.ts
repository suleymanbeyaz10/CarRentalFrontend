import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/carDetailServices/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails: CarDetail = {
    carId: 0,
    carName: '',
    brandName: '',
    colorName: '',
    modelYear: 0,
    dailyPrice: 0,
    imagePath: '',
    carImages: [],
  };
  dataLoaded = false;
  constructor(private carDetailService: CarDetailService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params['carId']) {
        this.getCarDetailsById(params['carId']);
      }
    });
  }


  getCarDetailsById(carId: number) {
    this.carDetailService.getCarDetailsById(Number(carId)).subscribe(response => {

      this.carDetails = response.data;

      this.dataLoaded = true;
    });
  }

}
