import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
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
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import ImageBG from "../Images/photo-bg.png";
import UserImage from "../Images/user-photo.png";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [inputActive, setInputActive] = useState("");

  const navigation = useNavigation();

  const clickButtonRegister = () => {
    console.log("Credentials", `${login}+${email} + ${password}`);
    setLogin("");
    setEmail("");
    setPassword("");
  };
  const visibleButtonPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInput = (nameInput) => {
    setInputActive(nameInput);
  };

  return (
    <ImageBackground source={ImageBG} resizeMode="cover" style={styles.image}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* <View style={styles.container}> */}
        <View style={styles.formData}>
          <View style={styles.containerImage}>
            <Image source={UserImage} style={styles.userImage}></Image>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          </View>
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
            keyboardVerticalOffset={0}
          >
            <TextInput
              autoFocus
              style={[
                {
                  backgroundColor:
                    inputActive === "login" ? "#FFFFFF" : "#F6F6F6",
                  borderColor: inputActive === "login" ? "#FF6C00" : "#E8E8E8",
                },
                styles.textInput,
              ]}
              placeholder="Логін"
              value={login}
              onChangeText={setLogin}
              onFocus={() => handleInput("login")}
              onBlur={() => handleInput("")}
            />
            <TextInput
              style={[
                {
                  backgroundColor:
                    inputActive === "email" ? "#FFFFFF" : "#F6F6F6",
                  borderColor: inputActive === "email" ? "#FF6C00" : "#E8E8E8",
                },
                styles.textInput,
              ]}
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
              dataDetectorTypes="address"
              inputMode="email"
              keyboardType="email-address"
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
                minLength={5}
                value={password}
                onChangeText={setPassword}
                onFocus={() => handleInput("password")}
                onBlur={() => handleInput("")}
              />
              <Text style={styles.showButton} onPress={visibleButtonPassword}>
                {!showPassword ? "Показати" : "Сховати"}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={clickButtonRegister}
            >
              <Text style={styles.buttonText}>Зареєстуватися</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
          <TouchableOpacity style={{ backgroundColorcolor: "#FF6C00" }}>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate("LoginScreen")}
              dataDetectorType="link"
            >
              Вже є акаунт? Увійти
            </Text>
          </TouchableOpacity>

          {/* </View> */}
        </View>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  inputBorderColor: {
    color: "pink",
  },
  // container: {
  //   flex: 1,
  //   margin: 0,
  //   padding: 0,
  //   backgroundColor: "#FFF",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerImage: {
    position: "absolute",
    top: -60,
  },
  userImage: {
    width: 120,
    height: 120,
  },

  formData: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
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
    width: 343,
    height: 50,
    color: "#212121",
    borderWidth: 2,
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
  showButton: {
    position: "absolute",
    top: 25,
    right: 26,
  },
  link: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 66,
  },
});

export default RegistrationScreen;
