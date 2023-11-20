import { StyleSheet } from "react-native";
import { COLORS, MIXINS, SPACING, TYPOGRAPHY } from "@styles";

export const styles = StyleSheet.create({
	wrapper: {
		borderWidth: 1,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		columnGap: SPACING.SCALE_12,
		borderRadius: SPACING.BORDER_RADIUS,
	},
	primaryWrapper: {
		borderColor: COLORS.PRIMARY,
		backgroundColor: COLORS.PRIMARY,
	},
	secondaryWrapper: {
		borderColor: COLORS.PRIMARY,
		backgroundColor: COLORS.WHITE,
	},

	disabledWrapper: {
		borderColor: COLORS.GRAY,
		backgroundColor: COLORS.GRAY,
	},

	smallWrapper: {
		padding: SPACING.SCALE_8,
	},
	mediumWrapper: {
		padding: SPACING.SCALE_12,
	},
	largeWrapper: {
		padding: SPACING.SCALE_16,
	},

	smallTitle: {
        ...TYPOGRAPHY.BODY.CAPTION,
	},
	mediumTitle: {
        ...TYPOGRAPHY.BODY.SMALL,
	},
	largeTitle: {
        ...TYPOGRAPHY.HEADING.MEDIUM,
	},
});