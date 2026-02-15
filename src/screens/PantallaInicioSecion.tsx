import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native'
import {
  SafeAreaView,
  SafeAreaProvider
} from 'react-native-safe-area-context'

export const PantallaInicioSesion = () => {

  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {

    if (correo === '' || password === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios')
      return
    }

    Alert.alert('Bienvenido 🍦', `Hola ${correo}`)
  }

  const handleRegistro = () => {
    // En el futuro aquí irá navigation.navigate('PantallaRegistro')
    Alert.alert('Registro', 'Aquí irá la pantalla de registro')
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.wrapper}>

        <View style={styles.container}>

          <Text style={styles.titulo}>
            Heladería Deliciosa
          </Text>

          <Text style={styles.subtitulo}>
            Iniciar Sesión
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#888"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={[
              styles.boton,
              (correo === '' || password === '') && styles.botonDeshabilitado
            ]}
            onPress={handleLogin}
            disabled={correo === '' || password === ''}
          >
            <Text style={styles.textoBoton}>
              Entrar
            </Text>
          </TouchableOpacity>

          {/* TEXTO REGISTRO */}
          <TouchableOpacity onPress={handleRegistro}>
            <Text style={styles.textoRegistro}>
              ¿No tienes cuenta? Regístrate
            </Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor:  '#00BCD4',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    width: '90%',
    backgroundColor: '#F48FB1',
    borderRadius: 35,
    padding: 30,
    alignItems: 'center',
    elevation: 10,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 5,
  },

  subtitulo: {
    fontSize: 25,
    color: 'white',
    marginBottom: 25,
  },

  input: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    elevation: 5,
  },

  boton: {
    backgroundColor: '#00BCD4',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 25,
    marginTop: 10,
    elevation: 8,
  },

  botonDeshabilitado: {
    backgroundColor: '#00BCD4',
  },

  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  textoRegistro: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textDecorationLine: 'underline',
  }

})
