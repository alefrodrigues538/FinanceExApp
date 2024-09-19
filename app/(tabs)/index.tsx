import Card from "@/components/Card";
import CardItem from "@/components/CardItem";
import HorizontalCalendarCarousel from "@/components/HorizontalCalendarCarousel";
import Paragraph from "@/components/Paragraph";
import { FormatValue } from "@/utils/functions";
import { AntDesign, Entypo } from "@expo/vector-icons";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { barDataItem, pieDataItem } from "react-native-gifted-charts";

export default function HomeScreen() {
  const despesas = 3000.48;
  const despesasFixas = 1500;
  const despesasVariaveis = 1500.48;
  const receitas = 8500.0;
  const saldo = Number(receitas - despesas);
  const barData1: barDataItem[] = [
    { value: 2500, label: "JUL/2024" },
    { value: 2500, label: "AGO/2024" },
    {
      value: 5000,
      label: "SET/2024",
      frontColor: "#177AD5",
    },
    { value: 2500, label: "OUT/2024" },
    { value: 2500, label: "NOV/2024" },
  ];
  const pieData: pieDataItem[] = [
    { value: 40, color: "#3498db", text: "Receita" },
    { value: 25, color: "#e74c3c", text: "Despesas" },
    { value: 20, color: "#2ecc71", text: "Investimentos" },
    { value: 15, color: "#f1c40f", text: "Outros" },
  ];
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <View style={styles.headerInner}>
          <Paragraph style={styles.headerTitle}>Visão Geral</Paragraph>
          <View style={styles.headerRight}>
            <TouchableOpacity activeOpacity={0.8} style={styles.touchable}>
              <AntDesign name="search1" size={24} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.touchable}>
              <Entypo name="dots-three-vertical" size={24} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
        <HorizontalCalendarCarousel />
      </View>

      {/* CONTENT */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* <BarChart
          adjustToWidth
          barWidth={22}
          noOfSections={4}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData1}
          yAxisThickness={0}
          xAxisThickness={0}
          spacing={52}
          initialSpacing={25}
          hideYAxisText
          xAxisLabelTextStyle={{
            height: 70,
            transform: [{ rotate: "45deg" }],
            paddingTop: 12,
          }}
          barInnerComponent={(item, index) => (
            <Paragraph
              style={{
                transform: [{ rotateZ: "-90deg" }],
                height: 40,
                width: 40,
                padding: 0,
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {barData1[Number(index)].value}
            </Paragraph>
          )}
        /> */}
        <Card>
          <CardItem
            title={"Receitas"}
            titleStyle={{ color: "green", fontWeight: "bold", fontSize: 16 }}
            totalValue={`R$ ${FormatValue(receitas)}`}
            percentValue={95}
            progressValue={`R$ ${FormatValue(receitas)}\nRecebido`}
            restValue={`R$ ${FormatValue(receitas)}\nA receber`}
            progressInnerColor={"green"}
          />
        </Card>
        <Card style={{ gap: 12 }}>
          <CardItem
            title={"Despesas"}
            titleStyle={{ color: "red", fontWeight: "bold", fontSize: 16 }}
            progressInnerColor={"red"}
            progressValue={`R$ ${FormatValue(despesas)}\nPago`}
            restValue={`R$ ${FormatValue(despesas)}\nA pagar`}
            totalValue={`R$ ${FormatValue(despesas)}`}
            percentValue={95}
          />
          <CardItem
            title={"Despesas Fixas"}
            titleStyle={{ color: "red", fontWeight: "bold", fontSize: 14 }}
            progressInnerColor={"red"}
            progressValue={`R$ ${FormatValue(despesasFixas)}\nPago`}
            restValue={`R$ ${FormatValue(despesasFixas)}\nA pagar`}
            totalValue={`R$ ${FormatValue(despesasFixas)}`}
            percentValue={55}
            progressBarHeight={3}
          />
          <CardItem
            title={"Despesas Variáveis"}
            titleStyle={{ color: "red", fontWeight: "bold", fontSize: 14 }}
            progressInnerColor={"red"}
            progressValue={`R$ ${FormatValue(despesasFixas)}\nPago`}
            restValue={`R$ ${FormatValue(despesasFixas)}\nA pagar`}
            totalValue={`R$ ${FormatValue(despesasFixas)}`}
            percentValue={75}
            progressBarHeight={3}
          />
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  },
});
