import { StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from "@styles";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: SPACING.SCALE_18,
        backgroundColor: COLORS.WHITE,
    },
    title: {
        color: COLORS.BLACK,
        ...TYPOGRAPHY.HEADING.LARGE,
    },
    btnContainer : {

        flexDirection: 'row',
        alignItems: 'center',
    },
    btnText: {
        color: COLORS.BLACK,
        ...TYPOGRAPHY.BODY.CAPTION,
    },
});

export default styles;