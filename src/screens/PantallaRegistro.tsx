import React, { useState } from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export const PantallaRegistro = () => {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [edad, setEdad] = useState("");
  const [cedula, setCedula] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.fondo}>
        <ScrollView contentContainerStyle={styles.alinearCuadro}>

          <View style={styles.container}>
            <Image
            source={{ uri: 'https://i.postimg.cc/ncVzS6kN/logotipo_detallado.png' }}
            style={styles.logo}
            resizeMode="contain"
            />

            <Text style={styles.titulo}>Crear Cuenta</Text>

            <TextInput
              style={styles.input}
              placeholder="Nombre Completo"
              placeholderTextColor="#888"
              value={nombre}
              onChangeText={setNombre}
            />

            <TextInput
              style={styles.input}
              placeholder="Correo Electrónico"
              placeholderTextColor="#888"
              value={correo}
              onChangeText={setCorreo}
              keyboardType="email-address"
            />

            <TextInput
              style={styles.input}
              placeholder="Celular"
              placeholderTextColor="#888"
              value={celular}
              onChangeText={setCelular}
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              placeholder="Edad"
              placeholderTextColor="#888"
              value={edad}
              onChangeText={setEdad}
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              placeholder="Cédula"
              placeholderTextColor="#888"
              value={cedula}
              onChangeText={setCedula}
              keyboardType="numeric"
            />

            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#888"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TextInput
              style={styles.input}
              placeholder="Confirmar Contraseña"
              placeholderTextColor="#888"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.boton} >{/* agregar despues onclick en el boton */}
              <Text style={styles.textoBoton}>Finalizar Registro</Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({

  fondo: {
    flex: 1,
    backgroundColor: "#00BCD4",
  },

  alinearCuadro: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },

  container: {
    width: "90%",
    backgroundColor: "#F48FB1",
    borderRadius: 35,
    padding: 15,
    alignItems: "center",
    elevation: 10,
  },
  logo: {
    width:250,
    height: 250,
    marginBottom: 0,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    marginBottom: 25,
  },

  input: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    elevation: 10,
  },

  boton: {
    backgroundColor: "#00BCD4",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
    elevation: 8,
  },

  textoBoton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

});
