export interface Rental {

    rentalId: number;
    customerFirstName: string;
    customerLastName: string;
    carName: string;
    rentDate: Date;
    returnDate: Date;
    dailyPrice: number;
}