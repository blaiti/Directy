import { StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from "@styles";

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.3,
        borderBottomColor: COLORS.GRAY_LIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.SCALE_12,
        padding: SPACING.SCALE_18,
        backgroundColor: COLORS.WHITE,
    },
    title: {
        color: COLORS.BLACK,
        ...TYPOGRAPHY.HEADING.MEDIUM,
    },
    subTitle: {
        color: COLORS.BLACK,
        ...TYPOGRAPHY.BODY.SMALL,
    },
});

export default styles;