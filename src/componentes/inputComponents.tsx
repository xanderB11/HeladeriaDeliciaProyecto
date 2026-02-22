import React from "react";
import { TextInput, KeyboardTypeOptions } from "react-native";
import { styleGlobal } from "../theme/AppTheme";

interface Props {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions; // ahora es opcional
  handleChangeValue: (name: string, value: string) => void;
  name: string;
  isPassword?: boolean;
  value?: string; // agregamos value
}

export const InputComponents = ({
  placeholder,
  keyboardType = "default", // valor por defecto
  handleChangeValue,
  name,
  isPassword = false,
  value,
}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      value={value} // input controlado
      onChangeText={(value) => handleChangeValue(name, value)}
      secureTextEntry={isPassword}
      style={styleGlobal.input}
    />
  );
};