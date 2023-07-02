import { IPartnerData } from "../types/IPartner";

export const pricing: IPartnerData['pricing'] = {
    products: [
        {
            id: 'model3',
            name: 'Model 3',
            pricing: 40240
        },
        {
            id: 'model3lr',
            name: 'Model 3 Long Range',
            pricing: 47240
        },
        {
            id: 'model3p',
            name: 'Model 3 Performance',
            pricing: 53240
        },
        {
            name: 'Autopilot',
            id: 'autopilotFull',
            pricing: 15000

        },
        {
            name: 'Autopilot Enhanced',
            id: 'autopilotEnhanced',
            pricing: 6000
        },
        {
            name: 'Body Paint',
            id: 'paintColorWhite',
            pricing: 0,

        },
        {
            name: 'Body Paint',
            id: 'paintColorGray',
            pricing: 1000
        },
        {
            name: 'Body Paint',
            id: 'paintColorBlue',
            pricing: 1000,
        },
        {
            name: 'Body Paint',
            id: 'paintColorBlack',
            pricing: 1500
        },
        {
            name: 'Body Paint',
            id: 'paintColorRed',
            pricing: 2000,
        },
        {
            name: 'Interior Color',
            id: 'interiorColorBlack',
            pricing: 0,
        },
        {
            name: 'Interior Color',
            id: 'interiorColorWhite',
            pricing: 1000,

        },
        {
            name: 'Floor mats',
            id: 'accessoriesFloorMats',
            pricing: 99
        },
        {
            name: 'Mobile Connector',
            id: 'accessoriesMobileConector',
            pricing: 459
        },
        {
            name: 'Wall Connector',
            id: 'accessoriesWallConector',
            pricing: 459
        },
    ]
}
