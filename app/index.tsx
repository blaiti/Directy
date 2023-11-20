import React from "react";
import { StyleSheet, ImageBackground, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';

import { Button } from "@components";
import { COLORS, SPACING, TYPOGRAPHY } from "@styles";
import { router } from "expo-router";
import { AppLinkUtils } from "@utils";

const Initial = () => {
    const insets = useSafeAreaInsets();
    
	return (
        <ImageBackground
            style={styles.container}
            resizeMode="cover"
            source={require("@images/initial.jpg")}
        >
            <View 
                style={{
                    ...styles.bodyContainer, 
                    marginBottom: insets.bottom ? insets.bottom : 0
                }}
            >
                <Text style={styles.title}>Find Your Favourite Nearby Activity</Text>
                <Button
                    title="Let's Go"
                    type="secondary"
                    size="large"
                    onPress={() => router.push(AppLinkUtils.getTabsPath())}
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

export default Initial;