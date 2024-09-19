import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  ColorValue,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Paragraph from "../Paragraph";

interface CheckboxProps extends TouchableOpacityProps {
  color: ColorValue;
  onChecked: (value: boolean) => void;
  checked: boolean;
  label?: string;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        props.style,
        {
          borderColor: props.color || "#222",
        },
      ]}
      activeOpacity={0.8}
      onPress={(e) => {
        props.onChecked(!props.checked);
        props.onPress && props.onPress(e);
      }}
    >
      <Feather
        name={props.checked ? "check-square" : "square"}
        size={24}
        color={props.color || "#222"}
      />
      <Paragraph>{props.label}</Paragraph>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 24,
    width: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});

export default Checkbox;
