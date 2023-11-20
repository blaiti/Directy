import React from "react";
import { View, Image, Text } from "react-native";
import { SvgXml } from 'react-native-svg';

import styles from "./styles";
import ICONS from "@icons";
import { Business } from "src/models";

interface HorizontalItemProps {
        business: Business;
}

const HorizontalItem = ({business}: HorizontalItemProps) => {
        return (
        <View style={styles.container}>
                <Image
                        resizeMode="cover"
                        style={styles.image}
                        source={{ uri: business.picture }} />

                <View style={styles.infoContainer}>
                        <View style={styles.titleContainer}>
                                <Text style={styles.title}>{business.name}</Text>
                                <View style={styles.rowContainer}>
                                        <Text style={styles.ratingText}>{business.rating}</Text>
                                        <SvgXml width={15} height={15} xml={ICONS.star} />
                                </View>
                        </View>

                        <Text style={styles.subTitle}>{business.category}</Text>

                        <View style={styles.titleContainer}>
                                <View style={{...styles.rowContainer, flex: 1}}>
                                        <SvgXml width={15} height={15} xml={ICONS.location} />
                                        <Text style={styles.subTitle}>{business.address.city}</Text>
                                </View>

                                <Text style={styles.subTitle}>1.7 Km</Text>
                        </View>
                </View>
        </View>
	);
};

export default HorizontalItem;