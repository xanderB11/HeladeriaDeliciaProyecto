import React from 'react'

import { PantallaLogo } from './src/screens/PantallaLogo';
import { PantallaInicioSesion } from './src/screens/PantallaInicioSecion';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PantallaRegistro } from './src/screens/PantallaRegistro';


const App = () => {
  return (

<SafeAreaProvider>
    <SafeAreaView style={{flex: 1}}>
      {/* <PantallaLogo/> */}
      <PantallaInicioSesion />
      {/* <PantallaRegistro/> */}

    </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App;