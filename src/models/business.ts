export interface Business {
  id: string;
  name: string;
  category: string;
  rating: number;
  review_count: number;
  picture: string;
  phone: string;
  website: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  } | null;
}
