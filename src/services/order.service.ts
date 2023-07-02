import { IOrder } from "../types/IOrder";

const orders: IOrder[] = [];

export const addNewOrder = async (data: IOrder) => {
    console.log('Add order')
    if (orders.includes(data)) return { message: 'Parner already in db' };
    orders.push(data);
    return data;
}
export const getOrderById = async (id: string) => {
    const orderData = orders.find(p => p.id === id);
    if (!orderData) return undefined;
    return orderData;
}
export const updateExistingOrder = async (data: IOrder) => {
    const orderData = orders.find(p => p.id === data.id);
    if (!orderData) return undefined;
    orders.splice(orders.indexOf(orderData), 1, data);
    return orderData;
}
export const deleteSingleOrder = async () => {
    // not necessary for this dummy proj
    return undefined;
}