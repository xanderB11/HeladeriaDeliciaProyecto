import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export const PantallaLogo = () => {
  return (
    <View style={styles.container}>

      <Image
        source={{ uri: 'https://i.postimg.cc/ncVzS6kN/logotipo_detallado.png' }} 
        style={styles.logo}
        resizeMode="contain"
      />
      
      <TouchableOpacity style={styles.boton}>
        <Text style={styles.textoBoton}>Entrar</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d0ff', // Fondo más elegante
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fb9abb',
    borderWidth:10,
  },

  logo: {
    width: 425,
    height: 350,
    marginBottom: 10,
  },

  

  boton: {
    backgroundColor: '#fb9abb',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 12,
    elevation: 5, // sombra Android
  },

  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
