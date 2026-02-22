import React, { useState } from "react";
import { Text, TouchableOpacity, View, Alert, Image, StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styleGlobal } from "../theme/AppTheme";
import { InputComponents } from "../componentes/inputComponents";
import { ButtonComponent } from "../componentes/ButtonComponent";
import { RootStackParamList } from "../navigator/StackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "InicioSesion">;

interface FormLogin {
  correo: string;
  password: string;
}

export const PantallaInicioSesion = ({ navigation }: Props) => {

  // Estado tipo objeto
  const [formLogin, setFormLogin] = useState<FormLogin>({
    correo: "",
    password: "",
  });

  // Función para actualizar valores
  const handleChangeValue = (name: string, value: string): void => {
    setFormLogin({ ...formLogin, [name]: value });
  };

  // Función iniciar sesión
  const iniciarSesion = (): void => {
    console.log(formLogin);

  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styleGlobal.fondo}>
        <StatusBar  />
        <View style={styleGlobal.container}>

          <Image
            source={{ uri: "https://i.postimg.cc/ncVzS6kN/logotipo_detallado.png" }}
            style={styleGlobal.logo}
            resizeMode="contain"
          />

          <Text style={styleGlobal.titulo}>Iniciar Sesión</Text>

          <InputComponents
            placeholder="Correo electrónico"
            keyboardType="email-address"
            name="correo"
            handleChangeValue={handleChangeValue}
          />

          <InputComponents
            placeholder="Contraseña"
            name="password"
            handleChangeValue={handleChangeValue}
            isPassword
          />

          <ButtonComponent
            text="Entrar"
            onPress={iniciarSesion}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("Registro")}
          >
            <Text style={styleGlobal.textoRegistro}>
              ¿No tienes cuenta? Regístrate
            </Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};