import { makeAutoObservable, runInAction } from "mobx";

import { Business } from "@models";
import { getPlaces } from "@api";
import { LocationService, MapService } from "@services";
import { getNearbyByPlace } from "src/utils/distanceUtils";

export class AppStore {
  nearby: Business[] = [];
  topRated: Business[] = [];
  currentLocation: {
    latitude: number;
    longitude: number;
  } | null = null;
  address: {
    city: string;
    state: string;
    country: string;
  } | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setInitialState() {
    this.nearby = [];
    this.topRated = [];
    this.address = null;
    this.currentLocation = null;
  }

  async getNeabyPlaces(show: boolean) {
    const places = await getPlaces();
    const nearbyPlaces = getNearbyByPlace(
      places,
      this.currentLocation?.latitude,
      this.currentLocation?.longitude
    );

    const result = nearbyPlaces.length > 0 ? nearbyPlaces : places;

    const nearby = result.map((place) => ({
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

    runInAction(() => {
      this.nearby = nearby;
    });
  }

  async getTopRatedPlaces(show: boolean) {
    const places = await getPlaces();
    const nearbyPlaces = getNearbyByPlace(
      places,
      this.currentLocation?.latitude,
      this.currentLocation?.longitude
    );

    const result = nearbyPlaces.length > 0 ? nearbyPlaces : places;

    const topRated = result
      .filter((place) => place?.rating > 4)
      .map((place) => ({
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

    runInAction(() => {
      this.topRated = topRated;
    });
  }

  async getAddress() {
    LocationService.getLocation()
      .then(async (location) => {
        if (!location) return;
        const addr = await MapService.reverseGeocode(location);

        runInAction(() => {
          this.currentLocation = {
            latitude: location?.coords.latitude,
            longitude: location?.coords.longitude,
          };
          this.address = {
            city: addr?.address?.city || "",
            state: addr?.address?.state || "",
            country: addr?.address?.country || "",
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
