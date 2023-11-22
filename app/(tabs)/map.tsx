import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { observer } from "mobx-react";
import { SvgXml } from "react-native-svg";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import ICONS from "@icons";
import { useStore } from "@store";
import { SPACING, TYPOGRAPHY, COLORS, MIXINS } from "@styles";
import { router } from "expo-router";
import { AppLinkUtils } from "@utils";

const Map = () => {
  const { appStore } = useStore();

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.container}
      initialRegion={{
        latitude: appStore.nearby[0]?.coordinates?.latitude || 0,
        longitude: appStore.nearby[0]?.coordinates?.longitude || 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.09,
      }}
      zoomEnabled={true}
      zoomControlEnabled={true}
      showsUserLocation={true}
      showsMyLocationButton={true}
    >
      {appStore.nearby.map((business, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: business?.coordinates?.latitude || 0,
            longitude: business?.coordinates?.longitude || 0,
          }}
          title={business.name}
          onPress={() => router.push(AppLinkUtils.getBusinessPath(business))}
        >
          <TouchableOpacity style={styles.location}>
            <Text style={styles.title}>{business.name}</Text>
            <View style={styles.circleOne}>
              <View style={styles.circleTwo}>
                <SvgXml xml={ICONS.location} width={20} height={20} />
              </View>
            </View>
          </TouchableOpacity>
        </Marker>
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.SCALE_18,
  },
  location: {
    alignItems: "center",
    gap: SPACING.SCALE_4,
  },
  title: {
    ...TYPOGRAPHY.BODY.LARGE,
    color: COLORS.BLACK,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
  },
  circleOne: {
    alignItems: "center",
    justifyContent: "center",
    width: MIXINS.scaleSize(70),
    height: MIXINS.scaleSize(70),
    borderRadius: MIXINS.scaleSize(35),
    backgroundColor: COLORS.OPACITY_1,
  },
  circleTwo: {
    alignItems: "center",
    justifyContent: "center",
    width: MIXINS.scaleSize(50),
    height: MIXINS.scaleSize(50),
    borderRadius: MIXINS.scaleSize(25),
    backgroundColor: COLORS.OPACITY_2,
  },
});

export default observer(Map);
