import { CarImage } from "./carImage";

export interface CarDetail {
    carId: number;
    carName: string;
    brandName: string;
    colorName: string;
    modelYear: number;
    dailyPrice: number;
    imagePath: string;
    carImages: string[];
}