import React from "react";
import { View, FlatList } from "react-native";

import styles from "./styles";
import { Business } from "src/models";
import HorizontalItem from "../HorizontalItem";

interface Props {
        business: Business[];
}

const HorizontalList = ({business}: Props) => {
        return (
                <View style={styles.container}>
                        <FlatList
                                data={business}
                                renderItem={({item}) => <HorizontalItem business={item} />}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                        />

                </View>
	);
};

export default HorizontalList;