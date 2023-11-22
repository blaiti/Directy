import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "@styles";

const styles = StyleSheet.create({
  container: {
    padding: SPACING.SCALE_18,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconContainer: {
    padding: SPACING.SCALE_12,
    backgroundColor: COLORS.WHITE,
    borderRadius: SPACING.BORDER_RADIUS,
  },
});

export default styles;
