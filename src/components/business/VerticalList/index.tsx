import React from "react";
import { View, FlatList } from "react-native";

import styles from "./styles";
import { Business } from "@models";
import VerticalItem from "../VerticalItem";

interface Props {
  business: Business[];
}

const VerticalList = ({ business }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={business}
        renderItem={({ item, index }) => <VerticalItem business={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default VerticalList;
