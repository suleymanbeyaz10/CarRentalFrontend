import { CarImage } from "./carImage";
import { Car } from "./car";

export interface CarDetail {
    carId: number;
    carName: string;
    brandName: string;
    colorName: string;
    modelYear: number;
    dailyPrice: number;
    imagePath: string;
    carImages: CarImage[];
}