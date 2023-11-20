import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { COLORS } from "@styles";
import { BusinessComponents, HeaderComponents } from "@components";
import { nearbyBusinesses } from "src/constants/nearby";

const Home = () => {
	return (
        <View style={styles.container}>
            <HeaderComponents.HomeHeader />

            <ScrollView
                style={styles.bodyContainer}
                showsVerticalScrollIndicator={false}
            >
                <HeaderComponents.TitleHeader title="Nearby" />
                <BusinessComponents.HorizontalList business={nearbyBusinesses} />
                <HeaderComponents.TitleHeader title="Recommended" />
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

export default Home;