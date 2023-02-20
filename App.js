import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Balance from "./components/Balance";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logout from "./components/Logout";
import QuickActions from "./components/QuickActions";
import { colors } from "./constants";
import Login from "./src/screens/Login";
import { useAuth } from "./useAuth";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./src/utils/firebase";

export default function App() {
  const { isAuth, user } = useAuth();

  const [cards, setCards] = React.useState([
    // {
    //   _id: "lkjjhv",
    //   number: "4525 3000 5243 7535",
    //   type: "Mir",
    //   balance: 33520,
    // },
    // {
    //   _id: "uygfx",
    //   number: "4525 3000 5243 7535",
    //   type: "Visa",
    //   balance: 23574,
    // },
    // {
    //   _id: "iuygf",
    //   number: "4525 3000 5243 7535",
    //   type: "MasterCard",
    //   balance: 1245,
    // },
  ]);

  React.useEffect(() => {
    const unSub = () => {
      onSnapshot(collection(db, "cards"), (shapshot) => {
        const data = shapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(data, "cards 1");
        setCards(data);
      });
    };

    return unSub;
  }, [user]);

  return (
    <View style={styles.container}>
      {isAuth ? (
        <>
          <Header />
          <Cards cards={cards} />
          <Balance card={cards[0]} />
          <QuickActions />
          <Logout />
          <Footer />
        </>
      ) : (
        <Login />
      )}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: colors.GRAY,
    paddingHorizontal: 24,
    paddingTop: 55,
    paddingBottom: 30,
  },
});
