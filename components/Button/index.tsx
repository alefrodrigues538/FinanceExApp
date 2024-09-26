import { Href, router } from "expo-router";
import React from "react";
import {
  ColorValue,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Paragraph from "../Paragraph";

interface ButtonProps extends TouchableOpacityProps {
  href?: Href;
  label: string;
  backgroundColor?: ColorValue;
  variation?: "primary" | "secondary";
  rounded?: boolean;
  roundedValue?: number;
  full?: boolean;
}

const Button = (props: ButtonProps) => {
  const variation = {
    primary: "#1A73E8",
    secondary: "#222",
  };
  const textVariation = {
    primary: "#FFF",
    secondary: "#FFF",
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={(e) => {
        if (props.href) {
          router.navigate(props.href);
        }

        props.onPress && props.onPress(e);
      }}
      style={[
        styles.container,
        {
          backgroundColor: variation[props.variation || "primary"],
          borderRadius: props.rounded ? props.roundedValue || 150 : 0,
          width: props.full ? "100%" : "auto",
        },
      ]}
    >
      <Paragraph
        style={[
          styles.textContainer,
          {
            color: textVariation[props.variation || "primary"],
          },
        ]}
      >
        {props.label}
      </Paragraph>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    height: 40,
    minWidth: 100,
  },
  textContainer: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default Button;
