import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { styleGlobal } from '../../../theme/AppTheme';
import { COLOR_AZUL, COLOR_ROSADO } from '../../../commons/constants';
import { ModalProductos } from './ModalProductos';
import { Product } from '../HomeScreen';

interface Props {
  item: Product;
  changeStockProduct: (id: number, quantity: number) => void;
}

export const CardProductos = ({ item, changeStockProduct }: Props) => {

  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <View style={styleGlobal.containerCard}>

        <Image
          source={{ uri: item.pathImage }}
          style={styleGlobal.imageCard}
        />

        <View style={{ flex: 1 }}>

          <Text style={styleGlobal.titleCard}>
            {item.name}
          </Text>

          <Text style={{ fontSize: 16, marginBottom: 10 }}>
            ${item.price.toFixed(2)}
          </Text>

          <Icon
            name='add-shopping-cart'
            size={30}
            color={COLOR_AZUL}
            onPress={toggleModal}
          />

        </View>

      </View>

      <ModalProductos
        isVisible={showModal}
        item={item}
        hiddenModal={toggleModal}
        changeStockProduct={changeStockProduct}
      />
    </>
  );
};