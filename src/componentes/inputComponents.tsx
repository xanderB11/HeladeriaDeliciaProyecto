import React from "react";
import { TextInput, KeyboardTypeOptions } from "react-native";
import { styleGlobal } from "../theme/AppTheme";

interface Props {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  handleChangeValue: (name: string, value: string) => void;
  name: string;
  isPassword?: boolean;
}

export const InputComponents = ({
  placeholder,
  keyboardType = "default",
  handleChangeValue,
  name,
  isPassword = false,
}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={isPassword}
      style={styleGlobal.input}
      onChangeText={(value) => handleChangeValue(name, value)}
    />
  );
};