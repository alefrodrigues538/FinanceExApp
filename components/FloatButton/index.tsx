import { Href, router } from "expo-router";
import React, { ReactNode } from "react";
import {
  ColorValue,
  DimensionValue,
  PressableProps,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface FloatButtonProps extends PressableProps {
  href: Href;
  icon: ReactNode;
  leftPosition?: DimensionValue;
  rightPosition?: DimensionValue;
  topPosition?: DimensionValue;
  bottomPosition?: DimensionValue;
  backgroundColor?: ColorValue;
  fontSize?: DimensionValue;
  color?: ColorValue;
}

const FloatButton = (props: FloatButtonProps) => {
  function onPress() {
    router.navigate("AddForm");
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          right: props.rightPosition || 12,
          bottom: props.bottomPosition || 12,
        },
      ]}
    >
      {props.icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#3498db",
    width: 48,
    height: 48,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FloatButton;
