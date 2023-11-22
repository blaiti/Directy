import { db } from "@utils";
import { collection, getDocs } from "firebase/firestore";

export async function getPlaces() {
  const placesCol = collection(db, "places");
  const placeSnapshot = await getDocs(placesCol);
  const placeList = placeSnapshot.docs.map((doc) => doc.data());

  return placeList;
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371;
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export const fetchNearbyPlaces = async (currentLocation) => {
  const YOUR_DEFINED_RADIUS = 100;

  const places = await getPlaces();

  return places.filter((place) => {
    const distance = getDistanceFromLatLonInKm(
      currentLocation.coords.latitude,
      currentLocation.coords.longitude,
      place.latitude,
      place.longitude
    );
    return distance <= YOUR_DEFINED_RADIUS;
  });
};
