import React from "react";
import {
  ColorValue,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import Paragraph from "../Paragraph";

interface RadioButtonProps extends TouchableOpacityProps {
  color: ColorValue;
  onChecked: (value: boolean) => void;
  checked: boolean;
  label?: string;
}

const RadioButton = (props: RadioButtonProps) => {
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
      <View
        style={[
          styles.outterContainer,
          {
            borderColor: props.color || "#222",
          },
        ]}
      >
        <View
          style={[
            styles.innerContainer,
            {
              backgroundColor: props.checked
                ? props.color || "#222"
                : "transparent",
            },
          ]}
        />
      </View>
      <Paragraph>{props.label}</Paragraph>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  outterContainer: {
    borderRadius: 100,
    borderWidth: 2,
    width: 20,
    height: 20,
    marginLeft: 2,
    padding: 2,
  },
  innerContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
});

export default RadioButton;
