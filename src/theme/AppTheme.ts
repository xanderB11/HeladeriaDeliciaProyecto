import { StyleSheet } from "react-native";
import { COLOR_AZUL, COLOR_ROSADO } from '../commons/constants';

export const styleGlobal = StyleSheet.create({


    // 🔵 LOGIN SCREEN


    fondo: {
        flex: 1,
        backgroundColor: COLOR_AZUL,
        justifyContent: "center",
        alignItems: "center",
    },

    container: {
        width: "90%",
        backgroundColor: COLOR_ROSADO,
        borderRadius: 35,
        padding: 20,
        alignItems: "center",
        elevation: 10,
    },

    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginBottom: 5,
        padding: 10
    },

    logo: {
        width: 300,
        height: 250,
        elevation: 10
    },

    botonLogo: {
        backgroundColor: COLOR_AZUL,
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 12,
        elevation: 5,
        alignItems: "center",
    },

    textoBotonLogo: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },


    // 🟣 REGISTER SCREEN


    fondoRegistro: {
        flex: 1,
        backgroundColor: COLOR_AZUL,
    },

    alinearCuadroRegistro: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 40,
    },

    tituloRegistro: {
        fontSize: 26,
        fontWeight: "bold",
        color: "white",
        marginBottom: 25,
    },

    textoRegistro: {
        marginTop: 20,
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        textDecorationLine: "underline",
        padding: 10
    },

    logoRegistro: {
        width: 400,
        height: 250,
    },


    // HOME SCREEN


    headerHome: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: COLOR_AZUL,
        elevation: 8
    },

    textoHome: {
        fontSize: 40,
        fontWeight: "bold",
        color: 'white',
        backgroundColor: COLOR_ROSADO,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 25,
        elevation: 4
    },

    iconHome: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    textIconCart: {
        backgroundColor: COLOR_ROSADO,
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 20,
        marginRight: 8
    },

    containerBody: {
        backgroundColor: '#FFE4EC',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        flex: 1
    },


    //  CARD PRODUCTOS

    containerCard: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 20,
        marginBottom: 20,
        backgroundColor: 'white',
        elevation: 6,
    },

    imageCard: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginRight: 15
    },

    titleCard: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    },

    iconCart: {
        marginTop: 5,
    },


    // MODAL PRODUCTOS
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalContent: {
        width: '85%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 10
    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '60%',
        marginVertical: 20
    },

    quantityButton: {
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: COLOR_ROSADO,
        color: 'white',
        paddingHorizontal: 15,
        borderRadius: 10
    },

    buttonAgregar: {
        backgroundColor: COLOR_AZUL,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginBottom: 10,
        elevation: 5
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonCerrar:{
        backgroundColor: COLOR_AZUL,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginBottom: 10,
        elevation: 5
    },


    //  COMPONENTES GENERALES (REUTILIZABLES)


    containerInput: {
        width: "100%",
        position: "relative",
        justifyContent: "center",
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

    iconPassword: {
        position: "absolute",
        right: 15,
        top: 18,
    },

    boton: {
        backgroundColor: COLOR_AZUL,
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 25,
        marginTop: 10,
        elevation: 8,
        alignItems: "center",
    },

    textoBoton: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    

});