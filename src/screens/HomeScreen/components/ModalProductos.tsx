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

          
          <Image
            source={{ uri: item.pathImage }}
            style={styleGlobal.imagenModal}
          />

          <Text style={styleGlobal.titleCard}>{item.name}</Text>
          <Text>Stock disponible: {item.stock}</Text>
          <Text>Precio: ${item.price.toFixed(2)}</Text>

          <View style={styleGlobal.quantityContainer}>

            <TouchableOpacity
              onPress={() =>setQuantity(quantity - 1)}
              disabled={ quantity  == 1 }>
              <Text style={styleGlobal.quantityButton}>-</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 18 }}>{quantity}</Text>

            <TouchableOpacity
              onPress={() => setQuantity(quantity + 1)}
              disabled={quantity == item.stock}>
              <Text style={styleGlobal.quantityButton}>+</Text>
            </TouchableOpacity>

          </View>

          
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