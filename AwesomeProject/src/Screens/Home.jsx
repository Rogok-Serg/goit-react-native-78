import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  const screenOptions = {
    tabBarShowLabel: false,
    HeaderShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
    },
  };

  return (
    <View style={styles.container}>
      <Tabs.Navigator screenOptions={screenOptions}>
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <AntDesign
                    name="appstore-o"
                    size={24}
                    color={focused ? "#212121CC" : "#111"}
                  />
                </View>
              );
            },
            title: "",
            headerStyle: {
              height: 44,
              // margin: 80,
            },
            headerTintColor: "#212121",
            headerTitleStyle: {
              flex: 0,
              textAlign: "center",
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: 22,
              // alignItems: "center",
              // justifyContent: "center",
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => alert("Logout")}>
                <MaterialIcons name="logout" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            ),
          }}
          name="PostsScreen"
          component={PostsScreen}
          onPress={() => navigation.navigate("PostsScreen")}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    marginBottom: 5,
                    marginTop: 10,
                    width: 70,
                    height: 40,
                    borderRadius: 30,
                    backgroundColor: "#FF6C00",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="plus"
                    size={24}
                    color="#FFFFFF"
                  />
                </View>
              );
            },
            title: "",
          }}
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          onPress={() => navigation.navigate("CreatePostsScreen")}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View>
                  <Feather
                    name="user"
                    size={24}
                    color={focused ? "#212121CC" : "#111"}
                  />
                </View>
              );
            },
            title: "",
          }}
          name="ProfileScreen"
          component={ProfileScreen}
          onPress={() => navigation.navigate("ProfileScreen")}
        />
      </Tabs.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

export default Home;
