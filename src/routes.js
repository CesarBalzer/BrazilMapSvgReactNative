import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './Home'
import MapaRegioes from './Maps/MapaRegioes';

function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="MapaRegioes" component={MapaRegioes} />
                {/* <AppStack.Screen name="Detail" component={Detail} /> */}
            </AppStack.Navigator>

        </NavigationContainer>

    );
}


export default Routes;