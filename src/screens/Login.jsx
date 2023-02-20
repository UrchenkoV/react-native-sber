import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { colors } from "../../constants";
import { login } from "../utils/firebase";

export default function Login() {
  const [email, setEmail] = React.useState("vlad@mail.ru");
  const [password, setPassword] = React.useState("123456");

  const onLogin = async () => {
    try {
      await login({ email, password });
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        placeholder="Почта"
        onChangeText={(val) => setEmail(val)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        onChangeText={(val) => setPassword(val)}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Войти" onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: "center" },
  input: {
    fontSize: 18,
    padding: 15,
    backgroundColor: colors.GRAY_FROM,
    color: colors.WHITE,
    borderColor: colors.WHITE,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  btn: {
    padding: 20,
  },
});
