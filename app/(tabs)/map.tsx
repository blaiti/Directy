import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { COLORS, SPACING, TYPOGRAPHY } from "@styles";

const Map = () => {
    const insets = useSafeAreaInsets();
    
	return (
            <View style={styles.container}>
                <Text style={styles.title}>Home</Text>
            </View>
	);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SPACING.SCALE_18,
        backgroundColor: COLORS.WHITE,
    },
    title: {
        color: COLORS.WHITE,
        ...TYPOGRAPHY.DISPLAY.MEDIUM,
        marginBottom: SPACING.SCALE_18,
    },
});

export default Map;