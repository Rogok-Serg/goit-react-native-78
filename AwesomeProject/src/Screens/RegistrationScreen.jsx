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
import { AntDesign } from "@expo/vector-icons";
// import Ionicons from "@expo/vector-icons/Ionicons";
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
    console.log("Credentials", `${login} + ${email} + ${password}`);
    setLogin("");
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
        keyboardVerticalOffset={-180}
      >
        <ImageBackground
          source={ImageBG}
          resizeMode="cover"
          style={styles.image}
        >
          {/* <View style={styles.container}> */}
          <View style={styles.formData}>
            <View style={styles.containerImage}>
              <Image source={UserImage} style={styles.userImage}></Image>

              <TouchableOpacity
                style={styles.wrapperIcon}
                onPress={() => alert("add Icon")}
              >
                <AntDesign
                  name="pluscircleo"
                  size={25}
                  color="#FF6C00"
                  style={styles.iconPosition}
                />
                {/* <Ionicons
                  name="md-checkmark-circle"
                  style={styles.iconPosition}
                  size={25}
                  color="green"
                /> */}
              </TouchableOpacity>
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
            <View>
              <TextInput
                autoFocus
                style={[
                  {
                    backgroundColor:
                      inputActive === "login" ? "#FFFFFF" : "#F6F6F6",
                    borderColor:
                      inputActive === "login" ? "#FF6C00" : "#E8E8E8",
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
                    borderColor:
                      inputActive === "email" ? "#FF6C00" : "#E8E8E8",
                  },
                  styles.textInput,
                ]}
                placeholder="Адреса електронної пошти"
                value={email}
                dataDetectorTypes="address"
                inputMode="email"
                keyboardType="email-address"
                autoCapitalize="none"
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
                  minLength={5}
                  value={password}
                  autoCapitalize="none"
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
              <TouchableOpacity style={{ backgroundColorcolor: "#FF6C00" }}>
                <Text
                  style={styles.link}
                  onPress={() => navigation.navigate("LoginScreen")}
                  dataDetectorType="link"
                >
                  Вже є акаунт? Увійти
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* </View> */}
          <StatusBar style="auto" />
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   margin: 0,
  //   padding: 0,
  //   backgroundColor: "#FFF",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  image: {
    // flex: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerImage: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
  },
  userImage: {
    width: "100%",
    height: "100%",
  },
  wrapperIcon: {
    position: "absolute",
    bottom: 10,
    right: -12,
    // borderRadius: 100,

    // borderWidth: 1,
    // borderColor: "#E8E8E8",
    // backgroundColor: "#FFFFFF",
    // textAlign: "center",
    // justifyContent: "center",
    // alignItems: "center",
  },
  // iconPosition: {
  //   // bottom: 4,
  //   // left: 5,
  // },
  formData: {
    flex: 1,
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
    textAlign: "center",
  },
});

export default RegistrationScreen;
