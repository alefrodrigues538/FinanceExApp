import Button from "@/components/Button";
import Checkbox from "@/components/CheckBox";
import Input from "@/components/Input";
import Paragraph from "@/components/Paragraph";
import RadioButton from "@/components/RadioButton";
import { Entypo, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const AddForm = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <View style={{ flex: 1 }}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <View style={styles.headerInner}>
          <View style={styles.headerLeft}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.touchable}
              onPress={() => router.back()}
            >
              <Feather name="arrow-left" size={24} color={"white"} />
            </TouchableOpacity>
            <Paragraph style={styles.headerTitle}>
              Adicionar Lançamento
            </Paragraph>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity activeOpacity={0.8} style={styles.touchable}>
              <Entypo name="dots-three-vertical" size={24} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Input label="Nome" onChangeText={(text) => console.log(text)} />
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Checkbox
            color={"#1A73E8"}
            onChecked={function (value: boolean): void {
              setChecked(value);
            }}
            checked={checked}
            label="Teste"
          />
          <RadioButton
            color={"#1A73E8"}
            onChecked={function (value: boolean): void {
              setChecked(value);
            }}
            checked={checked}
            label="Teste"
          />
          <Button label="teste" variation="secondary" />
        </View>
        <Button label="teste" variation="primary" rounded />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#1A73E8",
    padding: 12,
    gap: 8,
  },
  headerInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  headerLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  headerRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
  },
  touchable: {
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    minHeight: Dimensions.get("window").height - 170,
    padding: 12,
    gap: 12,
    backgroundColor: "#f8f8f8",
  },
});

export default AddForm;
