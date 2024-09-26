import { AntDesign } from "@expo/vector-icons";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Modal from "../Modal";

interface InputProps extends TextInputProps {
  label?: string;
  containerStyle?: ViewStyle;
  picker?: boolean;
  pickerContentLayout?: ReactNode;
  pickerTitle?: string;
}

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const Input = (props: InputProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const InputRef = useRef<TextInput>(null);
  const [value, setValue] = useState<string>("");
  const fontSize = useSharedValue(14);
  const topPosition = useSharedValue(12);
  const leftPosition = useSharedValue(8);
  const borderBottomWidth = useSharedValue(1);
  const borderColor = useSharedValue("#222");
  const labelColor = useSharedValue("#222");

  // Estilo animado para o TouchableOpacity
  const ContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      borderBottomWidth: withTiming(borderBottomWidth.value, { duration: 200 }),
      borderColor: withTiming(borderColor.value, { duration: 200 }),
    };
  });

  // Estilo animado para o Label
  const InputAnimatedStyle = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(fontSize.value, { duration: 200 }),
      top: withTiming(topPosition.value, { duration: 200 }),
      left: withTiming(leftPosition.value, { duration: 200 }),
      color: withTiming(labelColor.value, { duration: 200 }),
    };
  });

  // Função para alterar os valores e disparar a animação
  const triggerAnimation = (isFocused: boolean) => {
    fontSize.value = isFocused ? 14 : 16;
    topPosition.value = isFocused ? -10 : 12;
    leftPosition.value = isFocused ? 0 : 8;
    borderBottomWidth.value = isFocused ? 2 : 1;
    borderColor.value = isFocused ? "#1A73E8" : "#ccc";
  };

  function FocusInput() {
    if (!InputRef.current) return;

    InputRef.current.focus();
  }

  useEffect(() => {
    if (props.value) {
      triggerAnimation(true);
    } else {
      triggerAnimation(false);
    }
  }, [props.value]);
  return (
    <AnimatedTouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, ContainerAnimatedStyle, props.containerStyle]}
      onPress={() => (props.picker ? setOpenModal(true) : FocusInput)}
    >
      <Animated.Text style={[styles.labelText, InputAnimatedStyle]}>
        {props.label}
      </Animated.Text>
      <TextInput
        editable={!props.picker}
        ref={InputRef}
        {...props}
        style={[props.style, styles.input]}
        onFocus={() => {
          triggerAnimation(true);
          borderColor.value = "#1A73E8";
          labelColor.value = "#1A73E8";
        }}
        onBlur={() => {
          triggerAnimation(!!value);
          borderColor.value = "#ccc";
          labelColor.value = "#222";
        }}
        onChangeText={(text) => {
          setValue(text);
          props.onChangeText && props.onChangeText(text);
          return text;
        }}
      />
      {props.picker && (
        <View style={styles.pickerTouchable}>
          <AntDesign name="caretdown" size={12} color="#999" />
        </View>
      )}
      <Modal
        open={openModal}
        children={props.pickerContentLayout}
        onClose={() => setOpenModal(false)}
        title={props.pickerTitle}
      />
    </AnimatedTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: "100%",
    alignItems: "center",
  },
  labelText: {
    position: "absolute",
    textAlignVertical: "center",
    left: 8,
  },
  input: {
    height: "100%",
    width: "95%",
    paddingLeft: 12,
    bottom: -2,
  },
  pickerTouchable: {
    position: "absolute",
    right: 0,
    top: 8,
    height: 24,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Input;
