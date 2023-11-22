import React from "react";
import { StyleSheet } from "react-native";
import { observer } from "mobx-react";
import { SvgXml } from "react-native-svg";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

import ICONS from "@icons";
import { useStore } from "@store";
import { SPACING } from "@styles";

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
    >
      {appStore.nearby.map((business, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: business?.coordinates?.latitude || 0,
            longitude: business?.coordinates?.longitude || 0,
          }}
          title="Business Name"
        >
          <SvgXml xml={ICONS.location} width={25} height={25} />
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
});

export default observer(Map);
