import * as Location from "expo-location";

const getLocation = async (): Promise<Location.LocationObject | undefined> => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.error("Permission to access location was denied");
    return;
  }

  let location = await Location.getCurrentPositionAsync({});
  return location;
};

const LocationService = {
  getLocation,
};

export default LocationService;
