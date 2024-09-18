import React, { ReactNode } from "react";
import { ColorValue, DimensionValue, Text, TextProps } from "react-native";

interface ParagraphProps extends TextProps {
  children: ReactNode;
  size?: DimensionValue;
  color?: ColorValue;
}

const Paragraph = (props: ParagraphProps) => {
  return (
    <Text {...props} style={[props.style]}>
      {props.children}
    </Text>
  );
};

export default Paragraph;
