import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ImageBG from "../Images/photo-bg.png";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [inputActive, setInputActive] = useState("");

  const navigation = useNavigation();

  const clickButtonLogin = () => {
    console.log("Credentials", `${email} + ${password}`);
    setEmail("");
    setPassword("");
    navigation.navigate("Home");
  };

  const visibleButtonPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInput = (nameInput) => {
    setInputActive(nameInput);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-250}
      >
        <ImageBackground
          source={ImageBG}
          resizeMode="cover"
          style={styles.image}
        >
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
            <View>
              <TextInput
                style={[
                  {
                    backgroundColor:
                      inputActive === "email" ? "#FFFFFF" : "#F6F6F6",
                    borderColor:
                      inputActive === "email" ? "#FF6C00" : "#E8E8E8",
                  },
                  styles.textInput,
                ]}
                placeholder="Адреса електронної пошти"
                autoFocus
                dataDetectorTypes="address"
                inputMode="email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                onFocus={() => handleInput("email")}
                onBlur={() => handleInput("")}
              />
              <View>
                <TextInput
                  style={[
                    {
                      backgroundColor:
                        inputActive === "password" ? "#FFFFFF" : "#F6F6F6",
                      borderColor:
                        inputActive === "password" ? "#FF6C00" : "#E8E8E8",
                    },
                    styles.textInput,
                  ]}
                  placeholder="Пароль"
                  secureTextEntry={!showPassword ? true : false}
                  autoComplete="new-password"
                  autoCapitalize="none"
                  minLength={5}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => handleInput("password")}
                  onBlur={() => handleInput("")}
                />
                <Text style={styles.showButton} onPress={visibleButtonPassword}>
                  {!showPassword ? "Показати" : "Сховати"}{" "}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={clickButtonLogin}
              >
                <Text style={styles.buttonText}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColorcolor: "#FF6C00" }}>
                <Text
                  onPress={() => navigation.navigate("RegistrationScreen")}
                  style={styles.link}
                  dataDetectorType="link"
                >
                  Немає акаунту? Зареєструватися
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  image: {
    // flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  formData: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },

  textInput: {
    paddingLeft: 17,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    minWidth: "100%",
    height: 50,
    color: "#212121",
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
  },

  button: {
    marginTop: 43,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
  },
  showButton: {
    position: "absolute",
    top: 25,
    right: 26,
  },
  link: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginTop: 16,
    marginBottom: 128,
    textAlign: "center",
  },
});

export default LoginScreen;
