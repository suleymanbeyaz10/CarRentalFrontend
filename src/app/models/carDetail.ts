import { CarImage } from "./carImage";
import { Car } from "./car";

export interface CarDetail extends Car {
    brandName: string;
    colorName: string;
    imagePath: string;
    carImages: CarImage[];
}