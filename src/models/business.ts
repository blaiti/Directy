export interface Business {
    id: number;
    name: string;
    category: string;
    rating: number;
    review_count: number;
    picture: string;
    address: {
        street: string;
        city: string;
        state: string;
        zipcode: string;
    },
}

export interface BusinessDetails extends Business {
    phone: string;
    website: string;
    category: string;
    coordinates: {
        latitude: number;
        longitude: number;
    },
}