import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel {
    data: T[];
}

export interface DataResponseModel<T> extends ResponseModel {
    data: T;
}