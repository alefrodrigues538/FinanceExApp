import React from "react";
import { ColorValue, DimensionValue, StyleSheet, View } from "react-native";

const ProgressBar = (props: {
  percent?: number;
  innerColor?: ColorValue;
  outterColor?: ColorValue;
  height?: DimensionValue;
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.outterColor || "#DEDEDE",
          height: props.height || 10,
        },
      ]}
    >
      <View
        style={[
          styles.progress,
          {
            width: `${props.percent || 2}%`,
            minWidth: "2%",
            maxWidth: "100%",
            backgroundColor: props.innerColor || "#222",
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
  },
  progress: {
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 10,
  },
});

export default ProgressBar;
