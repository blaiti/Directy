import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  StatusBar,
  Linking,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { useStore } from "@store";

import { COLORS, SPACING, TYPOGRAPHY } from "@styles";
import { BusinessComponents, HeaderComponents } from "@components";
import { SvgXml } from "react-native-svg";
import ICONS from "@icons";

const BusinessScreen = () => {
  const { appStore } = useStore();
  const insets = useSafeAreaInsets();

  const { type } = useLocalSearchParams<{ type: string }>();
  const typeParsed: ("nearby" | "topRated") | null = type
    ? JSON.parse(type)
    : null;

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, { marginTop: insets.top || 0 }]}>
        <TouchableOpacity onPress={() => router.back()}>
          <SvgXml xml={ICONS.arrowLeft} width={25} height={25} />
        </TouchableOpacity>
        <Text style={styles.title}>
          {typeParsed === "nearby"
            ? "Nearby"
            : typeParsed === "topRated"
            ? "TopRated"
            : ""}
        </Text>
      </View>

      <BusinessComponents.VerticalList
        business={typeParsed === "nearby" ? appStore.nearby : appStore.topRated}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.SCALE_12,
    padding: SPACING.SCALE_18,
  },
  title: {
    color: COLORS.BLACK,
    ...TYPOGRAPHY.HEADING.LARGE,
  },
});

export default BusinessScreen;
