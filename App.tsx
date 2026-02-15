import React from 'react'

import { PantallaLogo } from './src/screens/PantallaLogo';
import { PantallaInicioSesion } from './src/screens/PantallaInicioSecion';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  return (

<SafeAreaProvider>
    <SafeAreaView style={{flex: 1}}>
      {/* <PantallaLogo/> */}
      <PantallaInicioSesion />
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App;