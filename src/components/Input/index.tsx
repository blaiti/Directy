import React from "react";
import type { TextInputProps, ViewStyle } from "react-native";
import { TextInput, View } from "react-native";

import { styles } from "./styles";
import { COLORS } from "@styles";

interface Props extends TextInputProps {
  label: string;
  value: string;
  leftIcon?: React.JSX.Element;
  customStyles?: ViewStyle;
  disabled?: boolean;
  required?: boolean;
}

export const Input = ({
  label = "",
  value,
  leftIcon,
  customStyles = {},
  disabled = false,
  required = false,
  ...props
}: Props) => {
  return (
    <View style={[styles.container, customStyles]}>
      {leftIcon && <View style={styles.rightIcon}>{leftIcon}</View>}
      <TextInput
        placeholder={label}
        style={styles.input}
        underlineColorAndroid="transparent"
        autoCorrect={false}
        value={value}
        returnKeyType={"done"}
        {...props}
        placeholderTextColor={COLORS.GRAY}
      />
    </View>
  );
};
