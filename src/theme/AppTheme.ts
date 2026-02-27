import { StyleSheet } from "react-native";
import { COLOR_AZUL, COLOR_ROSADO, COlOR_ROSADO_FUERTE } from '../commons/constants';

export const styleGlobal = StyleSheet.create({


    // 🔵 LOGIN SCREEN


    fondoPantalla: {
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
        elevation: 8,
        
    },

    textoHome: {
        fontSize: 40,
        fontWeight: "bold",
        color: 'white',
        backgroundColor: COlOR_ROSADO_FUERTE,
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
        backgroundColor: COlOR_ROSADO_FUERTE,
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 20,
        marginRight: 8
    },

    containerBody: {
        backgroundColor: COlOR_ROSADO_FUERTE,
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
        backgroundColor: 'rgba(71, 229, 246, 0.4)',
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
    imagenModal:{
    width: 120,
                  height: 120,
                  marginBottom: 10,
                  borderRadius:10,
                  padding: 10
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

    // MODAL CARRITO 

    containerModalCart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(71, 229, 246, 0.4)', 
    },

    bodyModalCart: {
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 15,
    },

    headerModalCart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: COLOR_ROSADO,
        paddingBottom: 10,
        marginBottom: 15
    },

    tituloModalCart: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLOR_AZUL
    },

    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginBottom: 10,
        backgroundColor: COLOR_AZUL,
        borderRadius: 10,
        padding: 5
    },

    textHeaderTable: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 14
    },

    rowProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        
    },

    textProductName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
        width: '40%'
    },

    textProductDetails: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center'
    },

    containerTotal: {
        marginTop: 20,
        paddingTop: 15,
        borderTopWidth: 2,
        borderTopColor: COLOR_ROSADO,
        alignItems: 'flex-end'
    },

    textTotal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COlOR_ROSADO_FUERTE
    },

    buttonBuy: {
        backgroundColor: COLOR_AZUL,
        marginTop: 20,
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        elevation: 5
    }
    

});