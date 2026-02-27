import React, { useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';
import { styleGlobal } from "../../theme/AppTheme";
import { COLOR_ROSADO, COlOR_ROSADO_FUERTE } from "../../commons/constants";
import { CardProductos } from "./components/CardProductos";
import { ModalCart } from "./components/ModalCart";

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
}

export interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export const HomeScreen = () => {

  const products: Product[] = [
    { id: 1, name: 'Tulipán Mix Simple', price: 1.80, stock: 10, pathImage: 'https://i.postimg.cc/1XfFpcm2/tulipan-mix.png' },
    { id: 2, name: 'Tulipán Mix Doble', price: 3.05, stock: 10, pathImage: 'https://i.postimg.cc/50jSfFHp/tulipan-mix-2-sabores.png'},
    { id: 3, name: 'Tulipán Mix Triple', price: 5.00, stock: 10, pathImage: 'https://i.postimg.cc/g2dyn7X1/tulipan-3-sabores.png' },
    { id: 4, name: 'Frutillas con Crema', price: 2.00, stock: 10, pathImage: 'https://i.postimg.cc/VvnMN9zG/frutillas-y-crema.png' },
    { id: 5, name: 'Frutillas Mix', price: 3.50, stock: 10, pathImage: 'https://i.postimg.cc/0NjwS18y/frutillas-crema-y-queso.png' },
    { id: 6, name: 'Ensalada de Frutas', price: 5.00, stock: 10, pathImage: 'https://i.postimg.cc/BnQLWfPd/fruta-y-helados.png' },
    { id: 7, name: 'Cono Mix Simple', price: 1.50, stock: 10, pathImage: 'https://i.postimg.cc/NfRMZPzr/Un-sabor-de-helado.png' },
    { id: 8, name: 'Cono Mix Doble', price: 2.25, stock: 10, pathImage: 'https://i.postimg.cc/4xNgwLkX/Dos-sabores-de-helado.png' },
    { id: 9, name: 'Cono Gelato Doble', price: 1.50, stock: 10, pathImage: 'https://i.postimg.cc/1XJWzKWV/helado-doble.png' },
    { id: 10, name: 'Cono Gelato', price: 1.00, stock: 10, pathImage: 'https://i.postimg.cc/wvDZ9L8W/cono-de-helado.png' },
  ];

  const [productsState, setProductsState] = useState<Product[]>(products);
  const [cart, setCart] = useState<Cart[]>([]);
  
  
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const changeStockProduct = (id: number, quantity: number): void => {
    const updatedProducts = productsState.map(product =>
      product.id === id
        ? { ...product, stock: product.stock - quantity }
        : product
    );

    setProductsState(updatedProducts);
    addProduct(id, quantity);
  };

  const addProduct = (id: number, quantity: number): void => {
    const product = productsState.find(p => p.id === id);
    if (!product) return;

    const newCart: Cart = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      total: product.price * quantity
    };

    setCart([...cart, newCart]);
  };

  return (
    <View style={{ flex: 1 }}>

      
      <View style={{...styleGlobal.headerHome, paddingTop: 50}}>
        <Text style={styleGlobal.textoHome}>Helados</Text>

        
        <TouchableOpacity 
            style={styleGlobal.iconHome}
            onPress={() => setIsVisible(true)}
        >
          <Text style={styleGlobal.textIconCart}>{cart.length}</Text>
          <Icon name="shopping-cart" size={40} color={COlOR_ROSADO_FUERTE} />
        </TouchableOpacity>
      </View>

     
      <View style={styleGlobal.containerBody}>
        <FlatList
          data={productsState}
          renderItem={({ item }) =>
            <CardProductos
              item={item}
              changeStockProduct={changeStockProduct}
            />}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* COMPONENTE MODAL LLAMADO AL FINAL */}
      <ModalCart 
        isVisible={isVisible} 
        cart={cart} 
        hiddenModal={() => setIsVisible(false)} 
      />

    </View>
  );
};