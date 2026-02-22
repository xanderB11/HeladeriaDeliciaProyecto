import { StyleSheet } from "react-native";

export const styleGlobal = StyleSheet.create({
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
        width: 300,
        height: 250,
        marginBottom: 0,
        elevation: 10
    },

    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginBottom: 5,
        textShadowColor: "#f6558b",
        textShadowOffset: { width: 2, height: 3 },
        textShadowRadius: 10,
        padding: 10
    },

    input: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
        fontSize: 16,
        elevation: 5,
    },

    boton: {
        backgroundColor: "#00BCD4",
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 25,
        marginTop: 10,
        elevation: 8,
    },

    botonDeshabilitado: {
        backgroundColor: "#00BCD4",
    },

    textoBoton: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },

    textoRegistro: {
        marginTop: 20,
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        textDecorationLine: "underline",
        padding: 10
    },
    textoBotonLogo: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: "#F48FB1",
        textShadowOffset: { width: 2, height: 3 },
        textShadowRadius: 15

    },
    botonLogo: {
        backgroundColor: "#00BCD4",
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 12,
        elevation: 5,
    },

    fondoRegistro: {
        flex: 1,
        backgroundColor: "#00BCD4",
    },
    alinearCuadroRegistro: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 40,
    },
    logoRegistro: {
        width: 400,
        height: 250,
        marginBottom: 0,
    },
    tituloRegistro: {
        fontSize: 26,
        fontWeight: "bold",
        color: "white",
        marginBottom: 25,
    },

})