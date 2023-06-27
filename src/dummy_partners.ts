interface IPartner {
    id: number,
    name: string,
    logo: {
        url: string,
        alt: string
    },
    accent_color: {
        h: number
        s: number
        l: number
    },
}

export const partners: IPartner[] = [
    {
        id: 0,
        name: 'Bank of America',
        logo: {
            url: 'https://www2.bac-assets.com/homepage/spa-assets/images/assets-images-global-logos-bac-logo-v2-CSX3648cbbb.svg',
            alt: 'Bank of America'
        },
        accent_color: {
            h: 0,
            s: 100,
            l: 50
        }
    },
    {
        id: 1,
        name: 'Bizee',
        logo: {
            url: 'https://www.pngall.com/wp-content/uploads/2/B-Letter-Transparent.png',
            alt: 'Bizee'
        },
        accent_color: {
            h: 24,
            s: 100,
            l: 50
        }
    },
    {
        id: 2,
        name: 'HBO',
        logo: {
            url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/HBO_logo.svg',
            alt: 'HBO',
        },
        accent_color: {
            h: 300,
            s: 100,
            l: 72
        }
    }
]
