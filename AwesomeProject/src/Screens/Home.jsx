import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Tabs.Navigator initialRouteName="Home">
        <Tabs.Screen
          options={{
            title: "Публікації",
            headerStyle: {
              height: 80,
              // margin: 80,
            },
            headerTitleStyle: {
              flex: 0,
              color: "#212121",
              textAlign: "center",
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: 22,
              alignItems: "center",
              justifyContent: "center",
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
          options={{ title: "Створити публікацію" }}
          onPress={() => navigation.navigate("CreatePostsScreen")}
          name="CreatePostsScreen"
          component={CreatePostsScreen}
        />
        <Tabs.Screen
          options={{ title: "Створити публікацію" }}
          onPress={() => navigation.navigate("ProfileScreen")}
          name="ProfileScreen"
          component={ProfileScreen}
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
