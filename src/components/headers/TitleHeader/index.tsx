import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { router } from "expo-router";

import ICONS from "@icons";
import styles from "./styles";
import { AppLinkUtils } from "@utils";

interface TitleHeaderProps {
  title: string;
  type: "nearby" | "topRated";
}

const TitleHeader = ({ title, type }: TitleHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        onPress={() => router.push(AppLinkUtils.getListPath(type))}
        style={styles.btnContainer}
      >
        <Text style={styles.btnText}>See More</Text>
        <SvgXml xml={ICONS.chevronRight} width={15} height={15} />
      </TouchableOpacity>
    </View>
  );
};

export default TitleHeader;
