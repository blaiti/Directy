import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import { router } from "expo-router";

import styles from "./styles";
import ICONS from "@icons";

const BusinessHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={{
        ...styles.container,
        marginTop: insets.top,
      }}
    >
      <View style={styles.iconContainer}>
        <SvgXml xml={ICONS.arrowLeft} width={25} height={25} />
      </View>
    </TouchableOpacity>
  );
};

export default BusinessHeader;
