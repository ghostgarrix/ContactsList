import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { AppStackRoutes } from "./routes";
import Home from "@src/screens/Home/HomeScreen";

const Stack = createNativeStackNavigator<ParamListBase>();

const AppStack = (): React.ReactElement => (
  <Stack.Navigator initialRouteName={AppStackRoutes.Home}>
    <Stack.Screen name={AppStackRoutes.Home} component={Home} />
  </Stack.Navigator>
);

export default AppStack;
