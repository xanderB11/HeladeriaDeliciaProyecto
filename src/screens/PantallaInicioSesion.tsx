import React, { useState } from "react";
import { Text, View, Alert, Image, StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styleGlobal } from "../theme/AppTheme";
import { InputComponents } from "../componentes/inputComponents";
import { ButtonComponent } from "../componentes/ButtonComponent";
import { RootStackParamList, User } from "../navigator/StackNavigator";
import Icon from '@expo/vector-icons/MaterialIcons';
import { CommonActions } from "@react-navigation/native";

interface Props extends NativeStackScreenProps<RootStackParamList, "InicioSesion"> {
  users: User[];
}

interface FormLogin {
  correo: string;
  password: string;
}

export const PantallaInicioSesion = ({ navigation, users }: Props) => {

  const [formLogin, setFormLogin] = useState<FormLogin>({
    correo: "",
    password: "",
  });

  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  const handleChangeValue = (name: string, value: string): void => {
    setFormLogin({ ...formLogin, [name]: value });
  };

  const verifyUSer = (): User => {
    const existUser = users.filter(user => user.correo == formLogin.correo && user.password == formLogin.password)[0];
    return existUser;

  }
  const iniciarSesion = (): void => {

    if (formLogin.correo == '' || formLogin.password == '') {
      Alert.alert("Error", "Complete todos los campos");
      return;
    }
    if (!verifyUSer) {
      Alert.alert("Error", "Correo o contraseña incorrectos");
      return;
    }
    navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
  };

  return (
    <View style={styleGlobal.fondoPantalla}>
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


        <View style={styleGlobal.containerInput}>
          <InputComponents
            placeholder="Contraseña"
            name="password"
            handleChangeValue={handleChangeValue}
            isPassword={hiddenPassword}
          />

          <Icon
            name={hiddenPassword ? 'visibility' : 'visibility-off'}
            color="black"
            size={22}
            style={styleGlobal.iconPassword}
            onPress={() => setHiddenPassword(!hiddenPassword)}
          />
        </View>

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
    </View>
  );
};