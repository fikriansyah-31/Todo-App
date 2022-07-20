import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import Todos from "./src/screens/Todos";
import Calculator from "./src/screens/Calculator";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Hello"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: { backgroundColor: theme.colors.primary["300"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Todos") {
            iconName = focused ? "file-tray-full" : "file-tray-full-outline";
          } else if (route.name === "Calculator") {
            iconName = focused ? "calculator" : "calculator-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInActiveTintColor: "grey",
      })}
    >
      <Tab.Screen name="Todos" component={Todos} options={{ headerShown: false }} />

      <Tab.Screen name="Calculator" component={Calculator} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MyTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
