import React from "react";
import { View, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styleGlobal } from "../theme/AppTheme";
import { ButtonComponent } from "../componentes/ButtonComponent";

export const PantallaLogo = ({ navigation }: any) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styleGlobal.fondo}>
        <View style={styleGlobal.container}>
          <Image
            source={{ uri: "https://i.postimg.cc/ncVzS6kN/logotipo_detallado.png" }}
            style={styleGlobal.logo}
            resizeMode="contain"
          />

          <ButtonComponent
            text="Entrar"
            onPress={() => navigation.navigate("InicioSesion")}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};