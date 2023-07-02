import { dummyPartners } from "../_dummy/dummyPartners";
import { IPartnerData } from "../types/IPartner";

const partners: IPartnerData[] = dummyPartners;

export const saveNewPartner = async (data: IPartnerData) => {
    if (partners.includes(data)) return { message: 'Parner already in db' };
    partners.push(data);
    return data;
}
export const getOneByName = async (identifier: string) => {
    const parnerData = partners.find(p => p.textIdentifier === identifier);
    if (!parnerData) return undefined;
    return parnerData;
}
export const updateExistingPartner = async (data: IPartnerData) => {
    const parnerIndex = partners.findIndex(p => p.id === data.id);
    if (!parnerIndex) return undefined;
    partners.splice(parnerIndex, 1, data);
}
export const deleteSinglePartner = async () => {
    // not necessary for this dummy proj
    return undefined;
}

