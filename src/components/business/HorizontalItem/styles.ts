import { StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from "@styles";

const styles = StyleSheet.create({
    container: {
        width: 220,
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.2,
        marginBottom: SPACING.SCALE_8,
        marginLeft: SPACING.SCALE_12,
        backgroundColor: COLORS.WHITE,
        borderRadius: SPACING.BORDER_RADIUS,
    },
    image: {
        width: 220,
        height: 120,
        borderTopLeftRadius: SPACING.BORDER_RADIUS,
        borderTopRightRadius: SPACING.BORDER_RADIUS,
    },
    infoContainer: {
        width: 220,
        position: 'relative',
        gap: SPACING.SCALE_4,
        padding: SPACING.SCALE_8,
        backgroundColor: COLORS.WHITE,
        borderRadius: SPACING.BORDER_RADIUS,
    },
    titleContainer: {
        gap: SPACING.SCALE_8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        flex: 1,
        color: COLORS.BLACK,
        ...TYPOGRAPHY.HEADING.SMALL,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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