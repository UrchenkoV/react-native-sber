import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors, shadow } from "../constants";
import { useAuth } from "../useAuth";

export default function Cards({ cards = [] }) {
  const { user } = useAuth();

  return (
    <View style={{ marginTop: 50, height: 300, overflow: "hidden" }}>
      {cards.map((card, idx) => (
        <View
          key={card.id}
          style={[
            styles.card,
            {
              position: idx !== 0 ? "absolute" : "relative",
              zIndex: idx === 1 ? 2 : idx === 2 ? 1 : 3,
              top: idx === 1 ? 19 : idx === 2 ? 35 : 0,
              left: idx === 1 ? 7 : idx === 2 ? 9 : 0,
              opacity: idx === 0 ? 1 : 0.5,
              transform: [
                { rotate: idx === 1 ? "10deg" : idx === 2 ? "19deg" : "0deg" },
              ],
            },
          ]}
        >
          <View>
            <Image
              source={require("../assets/chip-card.png")}
              style={{ width: 45, height: 45 }}
            />
          </View>
          <View>
            <Text style={styles.number}>{card.number}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{ color: colors.WHITE, fontSize: 13, marginBottom: 5 }}
              >
                Владелец
              </Text>
              <Text style={{ color: colors.WHITE, fontWeight: "500" }}>
                {user.email}
              </Text>
            </View>
            <View>
              <Image
                source={require(`../assets/Mir.png`)}
                style={{ width: 70, height: 60, opacity: idx === 0 ? 1 : 0 }}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.ASPECT,
    borderRadius: 50,
    padding: 25,
    width: "100%",
    ...shadow,
  },
  number: {
    color: colors.WHITE,
    fontSize: 23,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
  },
});
