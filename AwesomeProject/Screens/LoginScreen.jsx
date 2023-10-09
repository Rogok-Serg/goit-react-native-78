import React, { useState } from "react";

import {
  Alert,
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickButtonLogin = (e) => {
    console.log("Credentials", `${email} + ${password}`);
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.formData}>
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontWeight: 500,
            fontSize: 30,
            marginTop: 32,
            marginBottom: 32,
            textAlign: "center",
          }}
        >
          Увійти
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.textInput}
            placeholder="Адреса електронної пошти"
            autoFocus
            onChangeText={setEmail}
            dataDetectorTypes="address"
            inputMode="email"
            keyboardType="email-address"
            value={email}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Пароль"
            secureTextEntry={true}
            autoComplete="new-password"
            minLength={5}
            onChangeText={setPassword}
            value={password}
          />
          <Pressable style={styles.button} onPress={clickButtonLogin}>
            <Text style={styles.buttonText}>Увійти</Text>
          </Pressable>
        </KeyboardAvoidingView>
        <Text style={styles.link} dataDetectorType="link">
          Немає акаунту? Зареєструватися
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  formData: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 489,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },

  textInput: {
    backgroundColor: "#F6F6F6",
    paddingLeft: 17,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    width: 343,
    height: 50,
    color: "#F6F6F6",
    borderWidth: 2,
    borderColor: "#E8E8E8",
    borderRadius: 5,
    margin: 10,
  },
  button: {
    width: 343,
    marginTop: 43,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
  },
  link: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginTop: 16,
    marginBottom: 128,
  },
});

export default LoginScreen;
