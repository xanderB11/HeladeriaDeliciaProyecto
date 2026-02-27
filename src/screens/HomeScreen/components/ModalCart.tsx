import React from 'react'
import { FlatList, Modal, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons';
import { styleGlobal } from '../../../theme/AppTheme';
import { Cart } from '../HomeScreen';
import { COlOR_ROSADO_FUERTE } from '../../../commons/constants';

interface Props {
    cart: Cart[];
    isVisible: boolean;
    hiddenModal: () => void;
}

export const ModalCart = ({ isVisible, cart, hiddenModal }: Props) => {

    const { width } = useWindowDimensions();
    const totalplay = (): number => {
        let total: number = 0;
        cart.forEach(Product => {
            total = total + Product.total;
        })
        return total;
    }
    //funcion para comprar
    const handleBuy = () =>{
        //cerrar el modal 
    hiddenModal();
    }

    
return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styleGlobal.containerModalCart}>
                <View style={{ ...styleGlobal.bodyModalCart, width: width * 0.90 }}>

                    
                    <View style={styleGlobal.headerModalCart}>
                        <Text style={styleGlobal.tituloModalCart}>Mis Productos</Text>
                        <Icon name='cancel' size={30} color={COlOR_ROSADO_FUERTE} onPress={hiddenModal} />
                    </View>

                    
                    <View style={styleGlobal.headerTable}>
                        <Text style={[styleGlobal.textHeaderTable, { width: '40%' }]}>Producto</Text>
                        <Text style={styleGlobal.textHeaderTable}>Precio.</Text>
                        <Text style={styleGlobal.textHeaderTable}>Cantidad.</Text>
                        <Text style={styleGlobal.textHeaderTable}>Total</Text>
                    </View>

            
                    <FlatList
                        data={cart}
                        renderItem={({ item }) => (
                            <View style={styleGlobal.rowProduct}>
                                <Text style={styleGlobal.textProductName}>{item.name}</Text>
                                <Text style={styleGlobal.textProductDetails}>${item.price.toFixed(2)}</Text>
                                <Text style={styleGlobal.textProductDetails}>{item.quantity}</Text>
                                <Text style={[styleGlobal.textProductDetails, { fontWeight: 'bold' }]}>
                                    ${item.total.toFixed(2)}
                                </Text>
                            </View>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />

                    <View style={styleGlobal.containerTotal}>
                        <Text style={styleGlobal.textTotal}>Total a pagar: ${totalplay().toFixed(2)}</Text>
                    </View>

                    {/* BOTÓN COMPRAR */}
                    <TouchableOpacity style={styleGlobal.buttonBuy} onPress={handleBuy}>
                        <Text style={styleGlobal.buttonText}>Finalizar Compra</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    )
}