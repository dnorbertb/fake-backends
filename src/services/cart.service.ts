import { ICart } from "../types/ICart";

const carts: ICart[] = [];

export const addNewCart = async (data: ICart) => {
    if (carts.includes(data)) return { message: 'Parner already in db' };
    carts.push(data);
    return data;
}
export const getCartById = async (id: string) => {
    const cartData = carts.find(p => p.id === id);
    if (!cartData) return undefined;
    return cartData;
}
export const updateExistingCart = async (data: ICart) => {
    const cartData = carts.find(p => p.id === data.id);
    if (!cartData) return undefined;
    carts.splice(carts.indexOf(cartData), 1, { ...data, createDate: data.createDate });
    return cartData;
}
export const deleteSingleCart = async () => {
    // not necessary for this dummy proj
    return undefined;
}