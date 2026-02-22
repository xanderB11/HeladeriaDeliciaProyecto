import React, { useState } from "react";
import { Text, View, ScrollView, Image, Alert, StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styleGlobal } from '../theme/AppTheme';
import { RootStackParamList } from "../navigator/StackNavigator";
import { InputComponents } from "../componentes/inputComponents";
import { ButtonComponent } from "../componentes/ButtonComponent";

type Props = NativeStackScreenProps<RootStackParamList, "Registro">;

interface FormRegister {
    nombre: string;
    correo: string;
    celular: string;
    edad: string;
    password: string;
    confirmPassword: string;
}

export const PantallaRegistro = ({ navigation }: Props) => {

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
        console.log(formRegister);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styleGlobal.fondoRegistro}>
                <StatusBar  />
                <ScrollView contentContainerStyle={styleGlobal.alinearCuadroRegistro}>
                    <View style={styleGlobal.container}>

                        <Image
                            source={{ uri: "https://i.postimg.cc/ncVzS6kN/logotipo_detallado.png" }}
                            style={styleGlobal.logoRegistro}
                            resizeMode="contain"
                        />

                        <Text style={styleGlobal.tituloRegistro}>Crear Cuenta</Text>

                        <InputComponents
                            placeholder="Nombre Completo"
                            name="nombre"
                            handleChangeValue={handleChangeValue}
                        />

                        <InputComponents
                            placeholder="Correo Electrónico"
                            keyboardType="email-address"
                            name="correo"
                            handleChangeValue={handleChangeValue}
                        />

                        <InputComponents
                            placeholder="Celular"
                            keyboardType="numeric"
                            name="celular"
                            handleChangeValue={handleChangeValue}
                        />

                        <InputComponents
                            placeholder="Edad"
                            keyboardType="numeric"
                            name="edad"
                            handleChangeValue={handleChangeValue}
                        />

                        <InputComponents
                            placeholder="Contraseña"
                            name="password"
                            handleChangeValue={handleChangeValue}
                            isPassword
                        />

                        <InputComponents
                            placeholder="Confirmar Contraseña"
                            name="confirmPassword"
                            handleChangeValue={handleChangeValue}
                            isPassword
                        />

                        <ButtonComponent
                            text="Finalizar Registro"
                            onPress={registrarUsuario}
                        />
                        <ButtonComponent
                            text="Volver"
                            onPress={() => navigation.navigate("InicioSesion")}
                        />

                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};