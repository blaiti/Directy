import { Business } from "src/models";

export const recommendedBusinesses: Business[] = [
  {
    id: 1,
    name: "The Zink",
    category: "Restaurant",
    rating: 3.5,
    review_count: 100,
    picture: "https://www.kharjet.tn/wp-content/uploads/2020/05/le-zink-1.jpg",
    address: {
      street: "123 Main Street",
      city: "El Menzah 4",
      state: "Ariana",
      zipcode: "10001",
    },
  },
  {
    id: 2,
    name: "Brooklyn",
    category: "Coffee Shop",
    rating: 3.5,
    review_count: 100,
    picture:
      "https://media-cdn.tripadvisor.com/media/photo-s/03/21/1e/17/brooklyn-cafe.jpg",
    address: {
      street: "123 Main Street",
      city: "Manar 2",
      state: "Ariana",
      zipcode: "10001",
    },
  },
  {
    id: 3,
    name: "Yoyo food",
    category: "Restaurant",
    rating: 3.5,
    review_count: 100,
    picture:
      "https://nabeul.info/wp-content/uploads/2022/04/Nabeul-info-yoyo-food-restaurant-1.jpg",
    address: {
      street: "123 Main Street",
      city: "Nasser",
      state: "Ariana",
      zipcode: "10001",
    },
  },
];
