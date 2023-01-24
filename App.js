import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./Splash";
import Login from "./Login";
import Register from "./Register";
import Recover from "./Recover";
import Interests from "./Interests";
import Code from "./Code";

const Stack = createStackNavigator();

const user = {
  email: "",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} initialParams={user} />
        <Stack.Screen name="Login" component={Login} initialParams={user} />
        <Stack.Screen
          name="Register"
          component={Register}
          initialParams={user}
        />
        <Stack.Screen name="Recover" component={Recover} initialParams={user} />
        <Stack.Screen
          name="Interests"
          component={Interests}
          initialParams={user}
        />
        <Stack.Screen name="Code" component={Code} initialParams={user} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
