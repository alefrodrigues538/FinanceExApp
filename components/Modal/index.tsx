import { screenWidth, windowWidth } from "@/hooks/useDimensions";
import { AntDesign } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import Paragraph from "../Paragraph";

interface ModalProps {
  children: ReactNode;
  open?: boolean;
  onClose?: () => void;
  title?: string;
}
const ModalCustom = (props: ModalProps) => {
  return (
    <Modal visible={props.open} style={styles.container} transparent>
      <TouchableOpacity style={styles.overlay} onPress={props.onClose} />
      <View
        style={[
          styles.content,
          {
            width: screenWidth * 0.9,
            marginHorizontal: "auto",
          },
        ]}
      >
        <View style={styles.contentHeader}>
          <TouchableOpacity
            onPress={props.onClose}
            style={styles.closeTouchable}
          >
            <AntDesign name="close" size={20} />
          </TouchableOpacity>
          <Paragraph style={styles.title}>{props.title}</Paragraph>
        </View>
        {props.children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#0005",
    position: "absolute",
  },
  content: {
    width: "100%",
    minHeight: 250,
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: windowWidth * 0.5,
    padding: 8,
    gap: 8,
  },
  contentHeader: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  closeTouchable: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9,
  },
  title: {
    width: "100%",
    textAlign: "center",
    position: "absolute",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ModalCustom;
