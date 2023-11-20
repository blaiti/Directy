import React from "react";
import { StyleSheet, ImageBackground, View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { Button } from "src/components/Button";
import { COLORS, SPACING, TYPOGRAPHY } from "@styles";

const Home = () => {
	return (
        <ImageBackground
            style={styles.container}
            resizeMode="cover"
            source={require("@images/initial.jpg")}
        >
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>Find Your Favourite Nearby Activity</Text>
                <Button
                    title="Let's Go"
                    type="secondary"
                    size="large"
                    onPress={() => {}}
                    customStyles={{ marginBottom: SPACING.SCALE_12 }}
                />
            </View>
            <LinearGradient
				colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]}
                style={styles.linearGradientBottom}
            />
        </ImageBackground>
	);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: COLORS.WHITE,
    },
    bodyContainer: {
        zIndex: 1,
        padding: SPACING.SCALE_18,
        marginBottom: SPACING.SCALE_18
    },
    title: {
        color: COLORS.WHITE,
        ...TYPOGRAPHY.DISPLAY.MEDIUM,
        marginBottom: SPACING.SCALE_18,
    },
    linearGradientBottom: {
        flex: 1,
		left: 0,
		right: 0,
		bottom: 0,
		height: "100%",
		position: "absolute",
	},
});

export default Home;