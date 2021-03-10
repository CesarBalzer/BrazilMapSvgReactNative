import React from 'react';
import Reactotron from 'reactotron-react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './Home'
import MapaRegioes from './Maps/MapaRegioes';
import MapaRegiao from './Maps/MapaRegiao';
import RegiaoNorte from './Maps/Regions/Norte/RegiaoNorte'
import RegiaoNordeste from './Maps/Regions/Nordeste/RegiaoNordeste'
import RegiaoCentroOeste from './Maps/Regions/CentroOeste/RegiaoCentroOeste'
import RegiaoSudeste from './Maps/Regions/Sudeste/RegiaoSudeste'
import RegiaoSul from './Maps/Regions/Sul/RegiaoSul'
import HandleEstado from './Maps/HandleEstado';
import { Button, Text } from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/adaptive-icon.png')}
    />
  );
}



function Routes(props) {
  const OptionsNavigation = {

    headerTitle: props => <LogoTitle {...props} />,
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#00cc00"
      />
    ),
    headerLeft: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Back"
        color="#00cc00"
      />
    ),
  }
  // const navigation = useNavigation();

  Reactotron.log({ "PROPS": props })
  // Reactotron.log({ "NAVIGATION": navigation })



  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen
          name="Home"
          component={Home}
          options={OptionsNavigation}
        />
        <AppStack.Screen
          name="HandleEstado"
          component={HandleEstado}
          options={OptionsNavigation}
        />
        {/* <AppStack.Screen name="Home" component={Home} /> */}
        <AppStack.Screen name="MapaRegioes" component={MapaRegioes} />
        <AppStack.Screen name="MapaRegiao" component={MapaRegiao} />
        <AppStack.Screen name="RegiaoNorte" component={RegiaoNorte} />
        <AppStack.Screen name="RegiaoNordeste" component={RegiaoNordeste} />
        <AppStack.Screen name="RegiaoCentroOeste" component={RegiaoCentroOeste} />
        <AppStack.Screen name="RegiaoSudeste" component={RegiaoSudeste} />
        <AppStack.Screen name="RegiaoSul" component={RegiaoSul} />
        {/* <AppStack.Screen name="Detail" component={Detail} /> */}
      </AppStack.Navigator>

    </NavigationContainer>

  );
}


export default Routes;