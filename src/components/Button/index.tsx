import React from "react";
import type {
	StyleProp,
	TextStyle,
	TouchableOpacityProps,
	ViewStyle,
} from "react-native";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";

import { styles } from "./styles";
import { COLORS } from "@styles";

interface Props extends TouchableOpacityProps {
	title: string;
	leftIcon?: string;
	type: "primary" | "secondary";
	size: "small" | "medium" | "large";
	customStyles?: StyleProp<ViewStyle>;
	customTextStyle?: StyleProp<TextStyle>;
	disabled?: boolean;
	loading?: boolean;
	textColor?: string;
}

export const Button = ({
	title,
	leftIcon = "",
	type,
	size,
	customStyles = {},
	customTextStyle = {},
	disabled = false,
	loading = false,
	...props
}: Props) => {
    const textColor =
		type === "secondary"
			? COLORS.PRIMARY
			: type === "primary"
			? COLORS.WHITE
			: disabled
			? COLORS.BLACK
			: COLORS.WHITE;

	const iconSize = 20;

	const loadingSizes = {
		small: 17,
		medium: 20,
		large: 20,
	};

	return (
        <TouchableOpacity
			style={[
				styles.wrapper,
				type === "primary" && styles.primaryWrapper,
				type === "secondary" && styles.secondaryWrapper,

				disabled && styles.disabledWrapper,

				size === "small" && styles.smallWrapper,
				size === "medium" && styles.mediumWrapper,
				size === "large" && styles.largeWrapper,
				customStyles,
			]}
			disabled={disabled || loading}
			activeOpacity={0.6}
			{...props}
		>
            {loading ? (
				<ActivityIndicator
					size={loadingSizes[size]}
					color={COLORS.WHITE}
				/>
			) : (
				<>
					{leftIcon && (
						<SvgXml
							xml={leftIcon}
							width={iconSize}
							height={iconSize}
							color={textColor}
						/>
					)}
					<Text
						style={[
							size === "small" && styles.smallTitle,
							size === "medium" && styles.mediumTitle,
							size === "large" && styles.largeTitle,
							{
								color: textColor,
								textAlign: "center",
							},
							customTextStyle,
						]}
					>
						{title}
					</Text>
				</>
			)}
        </TouchableOpacity>
	);
};