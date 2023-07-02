export interface ICart {
    id: string,
    createDate: number,
    updateDate: number,
    orderData: Record<string, string | number | boolean>
}