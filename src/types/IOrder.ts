import { ICart } from "./ICart";

export interface IOrder {
    cart: ICart,
    paymentSuccessfull: boolean
}