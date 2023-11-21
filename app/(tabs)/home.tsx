import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { COLORS, SPACING } from "@styles";
import {
  BusinessComponents,
  Button,
  HeaderComponents,
  Input,
} from "@components";
import { nearbyBusinesses } from "src/constants/nearby";
import { recommendedBusinesses } from "src/constants/recommended";
import { SvgXml } from "react-native-svg";
import ICONS from "@icons";

const Home = () => {
  return (
    <View style={styles.container}>
      <HeaderComponents.HomeHeader />

      <ScrollView
        style={styles.bodyContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.searchContainer}>
          <Button
            title="Search..."
            customStyles={{
              flex: 1,
              justifyContent: "flex-start",
            }}
            leftIcon={ICONS.search}
            type={"secondary"}
            size={"medium"}
          />
          <Button leftIcon={ICONS.filter} type={"primary"} size={"medium"} />
        </View>
        <HeaderComponents.TitleHeader title="Nearby" />
        <BusinessComponents.HorizontalList business={nearbyBusinesses} />
        <HeaderComponents.TitleHeader title="Recommended" />
        <BusinessComponents.VerticalList business={recommendedBusinesses} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.SCALE_12,
    marginTop: SPACING.SCALE_18,
    marginHorizontal: SPACING.SCALE_18,
  },
});

export default Home;
