import React, { ReactNode } from "react";
import { StyleSheet, View, ViewProps } from "react-native";

interface CardProps extends ViewProps {
  children: ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <View {...props} style={[props.style, styles.container]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

export default Card;
