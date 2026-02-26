import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styleGlobal } from "../theme/AppTheme";

interface Props {
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

export const ButtonComponent = ({
  text,
  onPress,
  disabled = false,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styleGlobal.boton,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styleGlobal.textoBoton}>{text}</Text>
    </TouchableOpacity>
  );
};