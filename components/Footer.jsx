import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { gStyle } from "../styles/gStyle";
import { colors } from "../constants";

export default function Footer() {
  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <AntDesign name="home" size={30} color={colors.WHITE} />
      <FontAwesome name="bolt" size={30} color={colors.ICON_GRAY} />
      <AntDesign name="user" size={30} color={colors.ICON_GRAY} />
      <AntDesign name="bells" size={30} color={colors.ICON_GRAY} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
});
