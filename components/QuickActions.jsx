import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { gStyle } from "../styles/gStyle";
import { colors } from "../constants";
import FormatNumber from "./FormatNumber";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db } from "../src/utils/firebase";

export default function QuickActions() {
  const makePayment = async (value) => {
    console.log(value);
    const collectionRef = collection(db, "transactions");
    const payload = {
      card_from: "4525 3000 5243 7535",
      card_to: "5000 3000 5243 7535",
      created_at: serverTimestamp(),
      value,
    };

    try {
      await addDoc(collectionRef, payload);

      const colleactionRef = collection(db, "cards");
      console.log(colleactionRef, "colleactionRef");
      const q = query(
        colleactionRef,
        where("number", "in", ["4525 3000 5243 7535", "5000 3000 5243 7535"])
      );
      console.log(q, "q");
      const snapshot = await getDocs(q);
      console.log(snapshot, "snapshot");
      const results = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(results, "results");
      alert("Перевод выполнен.");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={[gStyle.sectionTitle, { marginBottom: 20 }]}>
        Быстрые платежи
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity onPress={() => makePayment(1000)}>
          <View style={styles.item}>
            <FontAwesome name="ruble" size={33} color={colors.WHITE} />
            <Text style={styles.title}>Зарплата</Text>
            <Text style={styles.price}>
              <FormatNumber value={1000} />
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.item}>
            <AntDesign name="user" size={33} color={colors.WHITE} />
            <Text style={styles.title}>Зарплата</Text>
            <Text style={styles.price}>
              <FormatNumber value={100000} />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.GRAY_FROM,
    paddingHorizontal: 40,
    paddingVertical: 40,
    borderRadius: 30,
    alignItems: "center",
  },
  title: {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 10,
  },
  price: { color: colors.WHITE, fontSize: 20, fontWeight: "500" },
});
