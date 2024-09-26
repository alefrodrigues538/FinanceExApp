import Button from "@/components/Button";
import Checkbox from "@/components/CheckBox";
import Input from "@/components/Input";
import Paragraph from "@/components/Paragraph";
import RadioButton from "@/components/RadioButton";
import { ExpenseType } from "@/interfaces/expenses";
import { RevenueType } from "@/interfaces/revenues";
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

type AddFormType = {
  name: string;
};

const AddForm = () => {
  const [form, setForm] = useState<ExpenseType | RevenueType>({
    id: 0,
    releaseType: "recebimento",
    name: "",
    value: 0,
    category: "Outros",
    dateOfExpire: "",
    inInstallments: false,
    installmentsCount: 1,
    installmentsStepType: "Mensalmente",
    status: false,
    type: "Unico",
    reminder: false,
  });

  const changeFormValue = (
    key: keyof ExpenseType | RevenueType,
    value: string | number | boolean
  ) => {
    setForm({ ...form, [key]: value });
  };

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
        <View style={styles.row}>
          <Paragraph style={{ width: "100%" }}>Tipo de lançamento</Paragraph>
          <RadioButton
            checked={form.releaseType === "recebimento"}
            color={""}
            onChecked={() => changeFormValue("releaseType", "recebimento")}
            label="Recebimento"
            style={{ width: "45%" }}
          />
          <RadioButton
            checked={form.releaseType === "despesa"}
            color={""}
            onChecked={() => changeFormValue("releaseType", "despesa")}
            label="Despesa"
            style={{ width: "45%" }}
          />
        </View>
        <Input
          label="Nome"
          onChangeText={(text) => changeFormValue("name", text)}
          containerStyle={{ width: "100%" }}
          value={form.name}
        />
        <Input
          label="Valor R$"
          onChangeText={(text) => changeFormValue("value", text)}
          containerStyle={{ width: "45%" }}
          keyboardType="number-pad"
          value={form.value.toFixed(2).replace(".", ",")}
        />
        <Input
          label="Data de Vencimento"
          onChangeText={(text) => changeFormValue("dateOfExpire", text)}
          containerStyle={{ width: "45%" }}
          value={form.dateOfExpire}
        />
        <Input
          label="Forma de pagamento"
          onChangeText={(text) => console.log(text)}
          containerStyle={{ width: "45%" }}
          value={form.type}
          picker
          pickerTitle="Selecione um item"
          pickerContentLayout={
            <View>
              <Paragraph>Test</Paragraph>
            </View>
          }
        />
        <Input
          label="Escolha uma categoria"
          onChangeText={(text) => console.log(text)}
          containerStyle={{ width: "45%" }}
          value={form.category}
          picker
          pickerTitle="Selecione um item"
          pickerContentLayout={
            <View>
              <Paragraph>Test</Paragraph>
            </View>
          }
        />
        <Input
          label="Tipo de parcelamento"
          onChangeText={(text) => console.log(text)}
          containerStyle={{ width: "45%" }}
          value={form.installmentsStepType}
          picker
          pickerTitle="Selecione um item"
          pickerContentLayout={
            <View>
              <Paragraph>Test</Paragraph>
            </View>
          }
        />
        <Input
          label="Quantidade de parcelas"
          onChangeText={(text) => console.log(text)}
          containerStyle={{ width: "45%" }}
          value={form.installmentsCount.toString()}
        />
        <Checkbox
          checked={form.reminder}
          label="Adicionar Lembrete"
          color={""}
          onChecked={() => changeFormValue("reminder", !form.reminder)}
          style={{ width: "45%" }}
        />
        <Button label="Criar" variation="primary" rounded full />
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
    gap: 16,
    backgroundColor: "#f8f8f8",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default AddForm;
