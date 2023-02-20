import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../constants";
import { useAuth } from "../useAuth";

export default function Header() {
  const { user } = useAuth();

  return (
    <View style={styles.root}>
      <View>
        <Text
          style={{
            color: colors.WHITE,
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 4,
          }}
        >
          Привет {user.email}
        </Text>
        <Text style={{ color: colors.GRAY_100, fontSize: 14 }}>
          Добро пожаловать!
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://sun9-7.userapi.com/impf/c302410/v302410139/11dc/z6LsI4V7Nqw.jpg?size=1280x960&quality=96&sign=c6b33f51e02231038338f78c6511f001&type=album",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: { width: 45, height: 45, borderRadius: 50 },
});
