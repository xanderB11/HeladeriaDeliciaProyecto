import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PantallaLogo } from "../screens/PantallaLogo";
import { PantallaInicioSesion } from "../screens/PantallaInicioSesion";
import { PantallaRegistro } from "../screens/PantallaRegistro";

export type RootStackParamList = {
  Logo: undefined;
  InicioSesion: undefined;
  Registro: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Logo" component={PantallaLogo} />
      <Stack.Screen name="InicioSesion" component={PantallaInicioSesion} />
      <Stack.Screen name="Registro" component={PantallaRegistro} />
    </Stack.Navigator>
  );
};