import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AnimTab2 from "./AnimTab2";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={"#00000060"} translucent />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AnimTab2">
          <Stack.Screen
            name="AnimTab2"
            component={AnimTab2}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
