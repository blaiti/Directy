import { StyleSheet } from "react-native";
import { COLORS, SPACING, TYPOGRAPHY } from "@styles";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    gap: SPACING.SCALE_8,
    flexDirection: "row",
    borderColor: COLORS.GRAY_LIGHT,
    backgroundColor: COLORS.WHITE,
    paddingVertical: SPACING.SCALE_16,
    paddingHorizontal: SPACING.SCALE_12,
    borderRadius: SPACING.BORDER_RADIUS,
  },
  input: {
    color: COLORS.BLACK,
    ...TYPOGRAPHY.BODY.LARGE,
  },
  rightIcon: {
    alignSelf: "flex-end",
  },
});
