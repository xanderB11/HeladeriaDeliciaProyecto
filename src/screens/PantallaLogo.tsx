import React from "react";
import { View, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styleGlobal } from "../theme/AppTheme";
import { ButtonComponent } from "../componentes/ButtonComponent";

export const PantallaLogo = ({ navigation }: any) => {
  return (
      <View style={styleGlobal.fondoPantalla}>
        <View style={styleGlobal.container}>
          <Image
            source={{ uri: "https://i.postimg.cc/ncVzS6kN/logotipo_detallado.png" }}
            style={styleGlobal.logo}
            
          />

          <ButtonComponent
            text="Entrar"
            onPress={() => navigation.navigate("InicioSesion")}
          />
        </View>
      </View>
  );
};