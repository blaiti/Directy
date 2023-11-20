import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { SvgXml } from 'react-native-svg';

import ICONS from "@icons";
import styles from "./styles";

interface TitleHeaderProps {
    title: string;
    onPress?: () => void;
}

const TitleHeader = ({ title, onPress }: TitleHeaderProps) => {
	return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <TouchableOpacity
                onPress={onPress}
                style={styles.btnContainer}
            >
                <Text style={styles.btnText}>See More</Text>
                <SvgXml xml={ICONS.chevronRight} width={15} height={15} />
            </TouchableOpacity>
        </View>
	);
};

export default TitleHeader;