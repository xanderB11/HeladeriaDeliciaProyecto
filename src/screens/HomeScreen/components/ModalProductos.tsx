import React, { useState } from 'react';
import { Modal, Text, View, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import { styleGlobal } from '../../../theme/AppTheme';
import { Product } from '../HomeScreen';

interface Props {
  isVisible: boolean;
  item: Product;
  hiddenModal: () => void;
  changeStockProduct: (id: number, quantity: number) => void;
}

export const ModalProductos = ({
  isVisible,
  item,
  hiddenModal,
  changeStockProduct
}: Props) => {

  const { height } = useWindowDimensions();
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <Modal visible={isVisible} transparent animationType="slide">

      <View style={styleGlobal.modalContainer}>
        <View style={[styleGlobal.modalContent, { height: height * 0.6 }]}>

          {/* IMAGEN DEL PRODUCTO */}
          <Image
            source={{ uri: item.pathImage }}
            style={{
              width: 120,
              height: 120,
              marginBottom: 10,
              borderRadius:10,
              padding: 10
            }}
          />

          <Text style={styleGlobal.titleCard}>{item.name}</Text>
          <Text>Stock disponible: {item.stock}</Text>
          <Text>Precio: ${item.price.toFixed(2)}</Text>

          {/* CONTROL DE CANTIDAD */}
          <View style={styleGlobal.quantityContainer}>

            <TouchableOpacity
              onPress={() => quantity > 1 && setQuantity(quantity - 1)}>
              <Text style={styleGlobal.quantityButton}>-</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 18 }}>{quantity}</Text>

            <TouchableOpacity
              onPress={() => quantity < item.stock && setQuantity(quantity + 1)}>
              <Text style={styleGlobal.quantityButton}>+</Text>
            </TouchableOpacity>

          </View>

          {/* BOTÓN AGREGAR */}
          <TouchableOpacity
            style={styleGlobal.buttonAgregar}
            onPress={() => {
              changeStockProduct(item.id, quantity);
              hiddenModal();
              setQuantity(1); // reinicia cantidad
            }}>
            <Text style={styleGlobal.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={hiddenModal} style={styleGlobal.buttonCerrar}>
            <Text style={styleGlobal.buttonText}>Cerrar</Text>
          </TouchableOpacity>

        </View>
      </View>

    </Modal>
  );
};