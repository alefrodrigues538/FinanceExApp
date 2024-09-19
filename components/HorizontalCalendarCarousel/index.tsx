import moment from "moment";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Paragraph from "../Paragraph";

import { useIsFocused } from "@react-navigation/native";
import "moment/locale/pt-br";

// Define o locale como português do Brasil
moment.locale("pt-br");

type dateType = {
  month: number;
  year: number;
};

const screenWidth = Dimensions.get("window").width; // Largura da tela
const itemWidth = screenWidth / 3; // Largura de cada item (1/3 da tela)

const HorizontalCalendarCarousel = () => {
  const ref = useRef<FlatList>(null);
  const currentYear = moment().year();
  const currentMonth = moment().month() + 1;

  const [selectedDate, setSelectedDate] = useState<string>(
    currentMonth + "/" + currentYear
  );

  const data = useMemo(() => {
    let _data: dateType[] = [];
    for (let yIndex = -5; yIndex < 10; yIndex++) {
      for (let mIndex = 1; mIndex < 13; mIndex++) {
        _data.push({
          month: mIndex,
          year: currentYear + yIndex,
        });
      }
    }
    return _data;
  }, []);

  const focused = useIsFocused();
  useEffect(() => {
    if (!focused) return;

    let curIndex = data.findIndex(
      (fItem) => selectedDate === `${fItem.month}/${fItem.year}`
    );

    if (curIndex !== -1) {
      // Calcula o offset para centralizar o item
      const offset = itemWidth * curIndex - screenWidth / 2 + itemWidth / 2;

      ref.current?.scrollToOffset({
        offset: offset,
        animated: true,
      });
    }
  }, [focused, selectedDate]);

  return (
    <View>
      <FlatList
        ref={ref}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => item.month + "/" + item.year + index}
        onScrollToIndexFailed={(info) => {
          console.log(info); // Isso vai mostrar a razão da falha

          // Tentar novamente com um pequeno atraso
          setTimeout(() => {
            ref.current?.scrollToIndex({
              index: info.index,
              animated: false,
            });
          }, 100);
        }}
        getItemLayout={(data, index) => ({
          length: itemWidth, // Comprimento de cada item
          offset: itemWidth * index, // Deslocamento com base na posição
          index,
        })}
        renderItem={({ item }) => {
          let _date = `01/${item.month.toString().padStart(2, "0")}/${
            item.year
          }`;
          let selected = selectedDate === `${item.month}/${item.year}`;
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.touchable}
              onPress={() => setSelectedDate(`${item.month}/${item.year}`)}
            >
              <Paragraph
                style={[
                  styles.dateText,
                  {
                    color: selected ? "#FFF" : "#FFF9",
                    borderColor: "#FFF",
                    borderBottomWidth: selected ? 2 : 0,
                  },
                ]}
              >
                {moment(_date, "DD/MM/YYYY").format("MMM/YYYY").toUpperCase()}
              </Paragraph>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  dateText: {
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 8,
  },
  touchable: {
    width: itemWidth,
  },
});

export default HorizontalCalendarCarousel;
