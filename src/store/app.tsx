import { makeAutoObservable, runInAction } from "mobx";

import { Business } from "@models";
import { getPlaces } from "@api";

export class AppStore {
  nearby: Business[] = [];
  topRated: Business[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setInitialState() {
    this.nearby = [];
    this.topRated = [];
  }

  async getNeabyPlaces(show: boolean) {
    const places = await getPlaces();

    runInAction(() => {
      this.nearby = places.map((place) => ({
        id: place?.id,
        name: place?.name,
        category: place?.category,
        rating: place?.rating,
        review_count: place?.review_count,
        picture: place?.picture,
        phone: place.phone,
        website: place.website,
        address: place?.address,
        coordinates: place?.coordinates
          ? {
              latitude: place?.coordinates?.latitude,
              longitude: place?.coordinates?.longitude,
            }
          : null,
      }));
    });
  }

  async getTopRatedPlaces(show: boolean) {
    const places = await getPlaces();

    const topRated = places.filter((place) => place?.rating > 4);

    runInAction(() => {
      this.topRated = topRated.map((place) => ({
        id: place?.id,
        name: place?.name,
        category: place?.category,
        rating: place?.rating,
        review_count: place?.review_count,
        picture: place?.picture,
        phone: place.phone,
        website: place.website,
        address: place?.address,
        coordinates: place?.coordinates
          ? {
              latitude: place?.coordinates?.latitude,
              longitude: place?.coordinates?.longitude,
            }
          : null,
      }));
    });
  }
}
