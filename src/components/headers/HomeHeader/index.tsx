import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { observer } from "mobx-react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import styles from "./styles";
import ICONS from "@icons";
import { useStore } from "@store";

const HomeHeader = () => {
  const insets = useSafeAreaInsets();
  const { appStore } = useStore();

  return (
    <View
      style={{
        ...styles.container,
        marginTop: insets.top,
      }}
    >
      <SvgXml xml={ICONS.location} width={25} height={25} />
      <View>
        <Text style={styles.title}>{appStore.address?.city}</Text>
        <Text style={styles.subTitle}>
          {appStore.address?.state}, {appStore.address?.country}
        </Text>
      </View>
    </View>
  );
};

export default observer(HomeHeader);
