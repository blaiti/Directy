import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { observer } from "mobx-react";

import { COLORS } from "@styles";
import { useStore } from "@store";
import { BusinessComponents, HeaderComponents } from "@components";

const Home = () => {
  const { appStore } = useStore();

  return (
    <View style={styles.container}>
      <HeaderComponents.HomeHeader />

      <ScrollView
        style={styles.bodyContainer}
        showsVerticalScrollIndicator={false}
      >
        <HeaderComponents.TitleHeader title="Nearby" type="nearby" />
        <BusinessComponents.HorizontalList business={appStore.nearby} />
        <HeaderComponents.TitleHeader title="Top Rated" type="topRated" />
        <BusinessComponents.VerticalList business={appStore.topRated} />
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
});

export default observer(Home);
