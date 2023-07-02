export interface IOrder {
    id: string,
    car: string,
    language: string,
    createDate: number,
    updateDate: number,
    orderData: Record<string, string | number | boolean>
}