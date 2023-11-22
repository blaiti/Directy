import { LocationObject } from "expo-location";

const reverseGeocode = async (location: LocationObject) => {
  const address = await fetch(
    `https://geocode.maps.co/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}`
  );

  return await address.json();
};

const MapService = {
  reverseGeocode,
};

export default MapService;
