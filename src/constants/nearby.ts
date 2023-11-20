import { Business } from "src/models";

export const nearbyBusinesses: Business[] = [
    {
        id: 1,
        name: 'Red Castel',
        category: 'Restaurant',
        rating: 3.5,
        review_count: 100,
        picture: 'https://linstant-m.tn//uploads/2474.png',
        address: {
            street: '123 Main Street',
            city: 'El Menzah 5',
            state: 'Ariana',
            zipcode: '10001',
        },
    },
    {
        id: 2,
        name: 'Vagary',
        category: 'Coffee Shop',
        rating: 3.5,
        review_count: 100,
        picture: 'https://10619-2.s.cdn12.com/rests/original/107_510108613.jpg',
        address: {
            street: '123 Main Street',
            city: 'Nasser',
            state: 'Ariana',
            zipcode: '10001',
        },
    },
];
