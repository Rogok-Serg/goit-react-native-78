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

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButton = (e) => {
    e.preventDefault();
    Alert.alert("Credentials", `${login} + ${email} + ${password}`);
    setLogin("");
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
            marginTop: 92,
            marginBottom: 33,
            textAlign: "center",
          }}
        >
          Реєстрація
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            autoFocus
            style={styles.textInput}
            placeholder="Логін"
            onChangeText={(text) => {
              setLogin(text);
            }}
            value={login}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Адреса електронної пошти"
            onChangeText={(text) => {
              setEmail(text);
            }}
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
            onChangeText={(text) => {
              setPassword(text);
            }}
            value={password}
          />
          <Pressable style={styles.button} onPress={handleButton}>
            <Text style={styles.buttonText}>Зареєстуватися</Text>
          </Pressable>
        </KeyboardAvoidingView>
        <Text style={styles.link} dataDetectorType="link">
          Вже є акаунт? Увійти
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
    height: 549,
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
    marginBottom: 66,
  },
});

export default RegistrationScreen;
