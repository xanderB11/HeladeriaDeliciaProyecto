import React, { useState } from "react";
import { Text, View, ScrollView, Image, Alert, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styleGlobal } from '../theme/AppTheme';
import { RootStackParamList, User } from "../navigator/StackNavigator";
import { InputComponents } from "../componentes/inputComponents";
import { ButtonComponent } from "../componentes/ButtonComponent";

interface Props extends NativeStackScreenProps<RootStackParamList, "Registro"> {
  users: User[];
  handleAddUser: (user: User) => void;
}

interface FormRegister {
  nombre: string;
  correo: string;
  celular: string;
  edad: string;
  password: string;
  confirmPassword: string;
}

export const PantallaRegistro = ({ navigation, users, handleAddUser }: Props) => {

  const [formRegister, setFormRegister] = useState<FormRegister>({
    nombre: "",
    correo: "",
    celular: "",
    edad: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeValue = (name: string, value: string): void => {
    setFormRegister({ ...formRegister, [name]: value });
  };

  const registrarUsuario = (): void => {

    if (Object.values(formRegister).includes("")) {
      Alert.alert("Error", "Complete todos los campos");
      return;
    }

    if (formRegister.password !== formRegister.confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    const existe = users.find(user => user.correo === formRegister.correo);

    if (existe) {
      Alert.alert("Error", "El usuario ya existe");
      return;
    }

    const nuevoUsuario: User = {
      id: users.length + 1,
      nombre: formRegister.nombre,
      correo: formRegister.correo,
      celular: formRegister.celular,
      edad: formRegister.edad,
      password: formRegister.password,
    };

    handleAddUser(nuevoUsuario);

    Alert.alert("Éxito", "Usuario registrado correctamente");
    navigation.navigate("InicioSesion");
  };

  return (
    <View style={styleGlobal.fondoRegistro}> 
      <ScrollView contentContainerStyle={styleGlobal.alinearCuadroRegistro}>
        <View style={styleGlobal.container}>

          <Image
            source={{ uri: "https://i.postimg.cc/ncVzS6kN/logotipo_detallado.png" }}
            style={styleGlobal.logoRegistro}
            resizeMode="contain"
          />

          <Text style={styleGlobal.tituloRegistro}>Crear Cuenta</Text>

          <InputComponents placeholder="Nombre Completo" name="nombre" handleChangeValue={handleChangeValue} />
          <InputComponents placeholder="Correo Electrónico" keyboardType="email-address" name="correo" handleChangeValue={handleChangeValue} />
          <InputComponents placeholder="Celular" keyboardType="numeric" name="celular" handleChangeValue={handleChangeValue} />
          <InputComponents placeholder="Edad" keyboardType="numeric" name="edad" handleChangeValue={handleChangeValue} />
          <InputComponents placeholder="Contraseña" name="password" handleChangeValue={handleChangeValue} isPassword />
          <InputComponents placeholder="Confirmar Contraseña" name="confirmPassword" handleChangeValue={handleChangeValue} isPassword />

          <ButtonComponent text="Finalizar Registro" onPress={registrarUsuario} />
          <ButtonComponent text="Volver" onPress={() => navigation.navigate("InicioSesion")} />

        </View>
      </ScrollView>
    </View>
  );
};