import { IPartnerData } from "../types/IPartner";
import { pricing } from './dummyPricing';

export const dummyPartners: IPartnerData[] = [
    {
        id: 1,
        textIdentifier: 'tesla',
        name: 'Tesla USA',
        logo: {
            url: 'http://localhost:3000/public/tesla-logo.png',
            alt: 'Tesla USA'
        },
        accent_color: {
            h: 222,
            s: 100,
            l: 50
        },
        pricing
    },
    {
        id: 2,
        textIdentifier: 'tesla-1',
        name: 'Tesla USA',
        logo: {
            url: 'http://localhost:3000/public/tesla-logo.png',
            alt: 'Tesla USA'
        },
        accent_color: {
            h: 360,
            s: 100,
            l: 42
        },
        pricing
    },
    {
        id: 3,
        textIdentifier: 'tesla-2',
        name: 'Tesla USA',
        logo: {
            url: 'http://localhost:3000/public/tesla-logo.png',
            alt: 'Tesla USA'
        },
        accent_color: {
            h: 113,
            s: 100,
            l: 43
        },
        pricing
    }
]


