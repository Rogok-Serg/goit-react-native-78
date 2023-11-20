import { Text, View } from "react-native";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Home = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <View>
      <Text> Home PAGE</Text>
      <PostsScreen />
      <Tabs.Navigator initialRouteName="Home">
        <Tabs.Screen name="PostsScreen" component={PostsScreen} />
        <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
        <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tabs.Navigator>
    </View>
  );
};

export default Home;
