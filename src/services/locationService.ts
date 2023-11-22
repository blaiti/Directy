import { Alert, Linking, Platform, ToastAndroid } from "react-native";
import * as Location from "expo-location";

const hasPermissionIOS = async () => {
  const openSetting = () => {
    Linking.openSettings().catch(() => {
      Alert.alert("Unable to open settings");
    });
  };

  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status === "granted") {
    return true;
  }

  if (status === "denied") {
    Alert.alert(
      "Turn on Location Services to allow application to determine your location"
    );
  }

  if (status === "undetermined") {
    Alert.alert(
      "Turn on Location Services to allow application to determine your location.",
      "",
      [
        { text: "Go to Settings", onPress: openSetting },
        { text: "Don't Use Location", onPress: () => {} },
      ]
    );
  }

  return false;
};

export const hasLocationPermission = async (): Promise<boolean> => {
  if (Platform.OS === "ios") {
    const hasPermission = await hasPermissionIOS();
    return hasPermission;
  }

  if (Platform.OS === "android" && Platform.Version < 23) {
    return true;
  }

  let { status } = await Location.requestForegroundPermissionsAsync();

  if (status === "granted") {
    return true;
  }

  if (status === "denied") {
    ToastAndroid.show("Location permission denied by user.", ToastAndroid.LONG);
  } else if (status === "undetermined") {
    ToastAndroid.show(
      "Location permission revoked by user.",
      ToastAndroid.LONG
    );
  }

  return false;
};

// Request permission and get current location
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
  hasLocationPermission,
  hasPermissionIOS,
  getLocation,
};

export default LocationService;
