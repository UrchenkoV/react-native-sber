import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NumericFormat } from "react-number-format";

import { colors } from "../constants";
import { gStyle } from "../styles/gStyle";

export default function Balance({ card }) {
  return (
    <View>
      <Text style={[gStyle.sectionTitle, { marginBottom: 5 }]}>Баланс</Text>
      <NumericFormat
        value={card?.balance}
        allowLeadingZeros
        thousandSeparator=" "
        suffix=" ₽"
        displayType={"text"}
        renderText={(value) => (
          <Text
            style={{ color: colors.WHITE, fontSize: 28, fontWeight: "700" }}
          >
            {value}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {},
});
