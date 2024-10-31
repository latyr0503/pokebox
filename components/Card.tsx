import { Shadows } from "@/constants/Shadows";
import { useThemeColor } from "@/hooks/useThemeColors";
import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps;

export default function Card({ style, ...rest }: Props) {
  const colors = useThemeColor();
  return (
    <View
      style={[style, styles, { backgroundColor: colors.grayLight }]}
      {...rest}
    />
  );
}
const styles = {
  borderRadius: 8,
  ...Shadows.dp2,
  overflow: "hidden", 
} satisfies ViewStyle;
