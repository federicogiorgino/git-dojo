import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Repos from "../screens/Repos";
import Gists from "../screens/Gists";
import Following from "../screens/Following";
import Followers from "../screens/Followers";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animationTypeForReplace: "pop" }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Repos' component={Repos} />
      <Stack.Screen name='Gists' component={Gists} />
      <Stack.Screen name='Followers' component={Followers} />
      <Stack.Screen name='Following' component={Following} />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
