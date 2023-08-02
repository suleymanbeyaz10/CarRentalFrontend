import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/carDetailServices/car-detail.service';
import { CarImageService } from 'src/app/services/carImageServices/car-image.service';
import { CarService } from 'src/app/services/carServices/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];
  carImages: CarImage[] = [];
  dataLoaded = false;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (params["colorId"]) {
        this.getCarsByColorId(params["colorId"])
      }
      else if (params["brandId"]) {
        this.getCarsByBrandId(params["brandId"])
      }
      else {
        this.getCars();
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    });
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    });
  }

  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    });
  }

  navigateToCarDetails(carId: number) {
    this.router.navigate(['car/:id'], { queryParams: { id: carId } })

  }

}


