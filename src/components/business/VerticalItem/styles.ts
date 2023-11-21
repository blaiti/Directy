import { StyleSheet } from "react-native";
import { COLORS, SPACING, TYPOGRAPHY } from "@styles";

const styles = StyleSheet.create({
  container: {
    gap: SPACING.SCALE_8,
    marginHorizontal: SPACING.SCALE_18,
    flexDirection: "row",
    padding: SPACING.SCALE_8,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    marginBottom: SPACING.SCALE_12,
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.BORDER_RADIUS,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: SPACING.BORDER_RADIUS,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.BORDER_RADIUS,
  },
  titleContainer: {
    gap: SPACING.SCALE_18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    flex: 1,
    color: COLORS.BLACK,
    ...TYPOGRAPHY.HEADING.SMALL,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.SCALE_4,
  },
  ratingText: {
    color: COLORS.BLACK,
    ...TYPOGRAPHY.BODY.LARGE,
  },
  subTitle: {
    color: COLORS.GRAY,
    ...TYPOGRAPHY.BODY.LARGE,
  },
});

export default styles;
