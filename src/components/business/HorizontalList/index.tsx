import React from "react";
import { View, FlatList } from "react-native";

import styles from "./styles";
import { Business } from "src/models";
import HorizontalItem from "../HorizontalItem";
import { SPACING } from "@styles";

interface Props {
  business: Business[];
}

const HorizontalList = ({ business }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={business}
        renderItem={({ item, index }) => (
          <HorizontalItem
            business={item}
            customStyles={
              index === 0
                ? { marginLeft: SPACING.SCALE_18 }
                : index === business.length - 1
                ? { marginRight: SPACING.SCALE_18 }
                : null
            }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalList;
