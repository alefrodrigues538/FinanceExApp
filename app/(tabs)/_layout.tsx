import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Visão Geral",
          tabBarIcon: ({ color, focused, size }) => (
            <Entypo
              name={"bar-graph"}
              color={focused ? color : "#C3C3C3"}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused, size }) => (
            <AntDesign
              name="piechart"
              color={focused ? color : "#C3C3C3"}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="AddForm"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
