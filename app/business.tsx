import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  StatusBar,
  Linking,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { SvgXml } from "react-native-svg";

import ICONS from "@icons";
import { Business } from "@models";
import { COLORS, SPACING, TYPOGRAPHY } from "@styles";
import { Button, HeaderComponents } from "@components";

const BusinessScreen = () => {
  const insets = useSafeAreaInsets();
  const { business } = useLocalSearchParams<{ business: string }>();
  const businessParsed: Business | null = business
    ? JSON.parse(business)
    : null;

  const openMap = async () => {
    const scheme = Platform.select({
      ios: "maps://0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${businessParsed?.coordinates?.latitude},${businessParsed?.coordinates?.longitude}`;
    const label = "Custom Label";
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    await Linking.openURL(url as string);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={styles.image}
        borderBottomLeftRadius={100}
        borderBottomRightRadius={100}
        source={{ uri: businessParsed?.picture }}
      >
        <HeaderComponents.BusinessHeader />
      </ImageBackground>

      <View style={{ ...styles.body, marginBottom: insets.bottom || 0 }}>
        <View
          style={{
            ...styles.rowContainer,
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <View style={{ gap: SPACING.SCALE_4 }}>
            <Text style={styles.title}>{businessParsed?.name}</Text>
            <Text style={styles.subTitle}>{businessParsed?.category}</Text>
            <View style={styles.rowContainer}>
              <SvgXml width={15} height={15} xml={ICONS.location} />
              <Text style={styles.subTitle}>{businessParsed?.address}</Text>
            </View>
          </View>

          <View style={styles.ratingContainer}>
            <View style={[styles.rowContainer, styles.ratingBlock]}>
              <SvgXml width={15} height={15} xml={ICONS.star} />
              <Text>{businessParsed?.rating}</Text>
            </View>
            <View
              style={[styles.ratingBlock, { backgroundColor: COLORS.PRIMARY }]}
            >
              <Text style={styles.ratingText}>
                {businessParsed?.review_count}
              </Text>
              <Text style={styles.ratingText}>reviews</Text>
            </View>
          </View>
        </View>

        <View style={{ gap: SPACING.SCALE_8 }}>
          <View style={styles.rowContainer}>
            <Button
              title="Call"
              type={"secondary"}
              size={"small"}
              leftIcon={ICONS.phone}
              customStyles={{ flex: 1 }}
              onPress={async () =>
                await Linking.openURL(`tel:${businessParsed?.phone}`)
              }
            />
            <Button
              title="View Website"
              type={"secondary"}
              size={"small"}
              leftIcon={ICONS.website}
              customStyles={{ flex: 1 }}
              onPress={async () =>
                await Linking.openURL(`http://${businessParsed?.website}` || "")
              }
            />
          </View>
          <Button
            title="View on Map"
            type={"primary"}
            size={"large"}
            onPress={() => openMap()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  image: {
    flex: 2,
    resizeMode: "cover",
  },
  body: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: "space-between",
    paddingTop: SPACING.SCALE_18,
    paddingHorizontal: SPACING.SCALE_18,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.SCALE_8,
  },
  title: {
    color: COLORS.BLACK,
    ...TYPOGRAPHY.HEADING.LARGE,
  },
  subTitle: {
    color: COLORS.GRAY,
    ...TYPOGRAPHY.HEADING.SMALL,
  },
  ratingContainer: {
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    borderRadius: SPACING.BORDER_RADIUS,
  },
  ratingBlock: {
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.SCALE_4,
    padding: SPACING.SCALE_8,
    borderRadius: SPACING.BORDER_RADIUS,
  },
  ratingText: {
    color: COLORS.WHITE,
    ...TYPOGRAPHY.BODY.SMALL,
  },
});

export default BusinessScreen;
