import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export const PantallaLogo = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.fondo}>
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
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: "#00BCD4",
        justifyContent: "center",
        alignItems: "center",
    },

    container: {
        width: "90%",
        backgroundColor: "#F48FB1",
        borderRadius: 35,
        padding: 10,
        alignItems: "center",
        elevation: 10,
    },

    logo: {
        width: 425,
        height: 350,
        marginBottom: 0,
        elevation: 10
    },



    boton: {
        backgroundColor: "#00BCD4",
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 12,
        elevation: 5,
    },

    textoBoton: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: "#F48FB1",
        textShadowOffset: { width: 2, height: 3 },
        textShadowRadius: 15

    },
})
