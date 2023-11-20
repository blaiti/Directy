import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from 'react-native-svg';
import { useSafeAreaInsets } from "react-native-safe-area-context";

import styles from "./styles";
import ICONS from "@icons";

const HomeHeader = () => {
    const insets = useSafeAreaInsets();
    
	return (
        <View style={{
            ...styles.container,
            marginTop: insets.top,
        }}>
            <SvgXml xml={ICONS.location} width={25} height={25} />
            <View>
                <Text style={styles.title}>El Menzah 5</Text>
                <Text style={styles.subTitle}>Ariana, Tunisia</Text>
            </View>
        </View>
	);
};

export default HomeHeader;