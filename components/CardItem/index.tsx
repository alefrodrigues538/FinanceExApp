import React from "react";
import {
  ColorValue,
  DimensionValue,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import Paragraph from "../Paragraph";
import ProgressBar from "../ProgressBar";

const CardItem = (props: {
  title: string;
  titleStyle?: TextStyle;
  totalValue: string;
  percentValue: number;
  progressValue: string;
  restValue: string;
  progressBarHeight?: DimensionValue;
  progressInnerColor?: ColorValue;
  progressOutterColor?: ColorValue;
  onPress?: VoidFunction;
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.cardRow}>
        <Paragraph style={props.titleStyle}>{props.title}</Paragraph>
        <Paragraph style={props.titleStyle}>{props.totalValue}</Paragraph>
      </View>
      <ProgressBar
        percent={props.percentValue}
        innerColor={props.progressInnerColor}
        outterColor={props.progressOutterColor}
        height={props.progressBarHeight}
      />
      <View style={styles.cardRow}>
        <Paragraph style={{ fontSize: 14 }}>{props.progressValue}</Paragraph>
        <Paragraph style={{ fontSize: 14, textAlign: "right" }}>
          {props.restValue}
        </Paragraph>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardRow: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default CardItem;
