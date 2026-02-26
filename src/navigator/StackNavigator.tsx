import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PantallaLogo } from "../screens/PantallaLogo";
import { PantallaInicioSesion } from "../screens/PantallaInicioSesion";
import { PantallaRegistro } from "../screens/PantallaRegistro";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";

export interface User {
  id: number;
  nombre: string;
  correo: string;
  celular: string;
  edad: string;
  password: string;
}

export type RootStackParamList = {
  Logo: undefined;
  InicioSesion: undefined;
  Registro: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {


  const usersInitial: User[] = [
    {
      id: 1,
      nombre: "Alexander Baez",
      correo: "alexbaez@gmail.com",
      celular: "0999999999",
      edad: "25",
      password: "123456"
    },
    {
      id: 2,
      nombre: "Rene Alarcon",
      correo: "renealarcon@gmail.com",
      celular: "0988888888",
      edad: "30",
      password: "678910"
    }
  ];

  const [listUsers, setListUsers] = useState<User[]>(usersInitial);

  const handleAddUser = (user: User): void => {
    setListUsers([...listUsers, user]);
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Logo" component={PantallaLogo} />
      <Stack.Screen name="InicioSesion">
        {props => <PantallaInicioSesion {...props} users={listUsers} />}
      </Stack.Screen>
      <Stack.Screen name="Registro">
        {props => <PantallaRegistro {...props} users={listUsers} handleAddUser={handleAddUser} />}
      </Stack.Screen>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};