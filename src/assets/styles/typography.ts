import { FONTS } from "./fonts";
import { scaleFont } from "./mixins";

export const TYPOGRAPHY = {
	DISPLAY: {
		X_LARGE: {
			fontSize: scaleFont(64),
			fontFamily: FONTS.SyneRegular,
		},
		LARGE: {
			fontSize: scaleFont(42),
			fontFamily: FONTS.SyneRegular,
		},
		MEDIUM: {
			fontSize: scaleFont(32),
			fontFamily: FONTS.SyneBold,
		},
		SMALL: {
			fontSize: scaleFont(28),
			fontFamily: FONTS.SyneBold,
		},
	},
	HEADING: {
		LARGE: {
			fontSize: scaleFont(24),
			fontFamily: FONTS.SyneBold,
		},
		MEDIUM: {
			fontSize: scaleFont(20),
			fontFamily: FONTS.SyneSemiBold,
		},
		SMALL: {
			fontSize: scaleFont(18),
			fontFamily: FONTS.SyneSemiBold,
		},
	},
	BODY: {
		LARGE: {
			fontSize: scaleFont(16),
			fontFamily: FONTS.SyneMedium,
		},
		SMALL: {
			fontSize: scaleFont(14),
			fontFamily: FONTS.SyneMedium,
		},
		CAPTION: {
			fontSize: scaleFont(12),
			fontFamily: FONTS.SyneMedium,
		},
	},
};