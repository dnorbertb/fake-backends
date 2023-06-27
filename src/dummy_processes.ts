const pricing = {
    bundles: [
        {
            "id": 1,
            "type": "bundle",
            "name": "Silver Formation Bundle",
            "external_service_id": "Silver",
            "price": 0,
            "fees": [],
            "included": [],
        },
        {
            "id": 2,
            "type": "bundle",
            "name": "Gold Formation Bundle",
            "external_service_id": "Gold",
            "price": 12700,
            "fees": [],
            "included": [],
        },
        {
            "id": 3,
            "type": "bundle",
            "name": "Platinum Formation Bundle",
            "external_service_id": "Platinum",
            "price": 25000,
            "fees": [],
            "included": [],
        }
    ],
    products: [
        {
            "id": 1,
            "type": "product",
            "name": "Virtual Address",
            "external_service_id": "virtual-address",
            "is_subscription": true,
            "subscription_period": "monthly",
            "price": 2900,
            "fees": []
        },
        {
            "id": 2,
            "type": "product",
            "name": "EIN",
            "external_service_id": "ein",
            "is_subscription": false,
            "subscription_period": "",
            "price": 4900,
            "fees": []
        }

    ],
    formation_fees: {
        "IL": {
            "standard": {
                "name": "Illinois State Fee",
                "amount": 5000
            },
            "expedited": {
                "name": "Illinois State Fee (Expedited)",
                "amount": 10000
            }
        },
        "AL": {
            "standard": {
                "name": "Alabama State Fee",
                "amount": 5000
            },
            "expedited": {
                "name": "Alabama State Fee (Expedited)",
                "amount": 10000
            }
        },
        "AK": {
            "standard": {
                "name": "Alaska State Fee",
                "amount": 2500
            },
            "expedited": {
                "name": "Alaska State Fee (Expedited)",
                "amount": 7500
            }
        }
    }
}

export const processes = [
    {
        id: 0,
        partner_id: 0,
        process_type: 'formations',
        language: 'en',
        content: {
            process_title: 'Business formation',
            pages: [

            ]
        },
        pricing

    },
    {
        id: 1,
        partner_id: 0,
        process_type: 'formations',
        language: 'en',
        content: {
            process_title: 'Business formation',
            pages: []
        },
        pricing

    },
    {
        id: 2,
        partner_id: 0,
        process_type: 'formations',
        language: 'en',
        content: {
            process_title: 'Business formation',
            pages: []
        },
        pricing
    },
    {
        id: 3,
        partner_id: 1,
        process_type: 'formations',
        language: 'en',
        content: {
            process_title: 'Business formation',
            pages: []
        },
        pricing
    },
    {
        id: 4,
        partner_id: 1,
        process_type: 'formations',
        language: 'es',
        content: {
            process_title: 'Formación empresarial',
            pages: []
        },
        pricing
    },
    {
        id: 5,
        partner_id: 0,
        process_type: 'formations',
        language: 'es',
        content: {
            process_title: 'Business formation',
            pages: [

            ]
        },
        pricing

    },
    {
        id: 6,
        partner_id: 0,
        process_type: 'formations',
        language: 'pl',
        content: {
            process_title: 'Business formation',
            pages: [

            ]
        },
        pricing

    },
]



