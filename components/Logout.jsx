import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants";
import { logout } from "../src/utils/firebase";

export default function Logout() {
  return (
    <View style={{ alignItems: "center", marginVertical: 15 }}>
      <TouchableOpacity onPress={logout}>
        <Text style={{ padding: 5, color: colors.WHITE, fontSize: 16 }}>
          Выход
        </Text>
      </TouchableOpacity>
    </View>
  );
}
