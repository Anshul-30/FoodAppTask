import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";
import colors from "../styles/colors";
import { scale } from "../styles/scaling";

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: scale(14),
    fontWeight: '400',
    color: colors.black,
    lineHeight:scale(22),
  },
});

interface TextContainterProps extends TextProps {
  text: string | "";
  style?: any;
  isDynamicText?: boolean;
}

const TextContainer: React.FC<TextContainterProps> = ({
  text,
  isDynamicText = false,
  style = {},
  ...rest
}) => {
  return (
    <Text style={[styles.sectionTitle, style]} {...rest}>
      {isDynamicText ? text : text}
    </Text>
  );
};

export default React.memo(TextContainer);
