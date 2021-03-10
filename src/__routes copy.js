// import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const AppStack = createStackNavigator();

// import Home from './Home'
// import MapaRegioes from './Maps/MapaRegioes';
// import MapaRegiao from './Maps/MapaRegiao';
// import RegiaoNorte from './Maps/Regions/Norte/RegiaoNorte'
// import RegiaoNordeste from './Maps/Regions/Nordeste/RegiaoNordeste'
// import RegiaoCentroOeste from './Maps/Regions/CentroOeste/RegiaoCentroOeste'
// import RegiaoSudeste from './Maps/Regions/Sudeste/RegiaoSudeste'
// import RegiaoSul from './Maps/Regions/Sul/RegiaoSul'
// import { Button, Text } from 'react-native';

// function Routes() {
//     return (
//         <NavigationContainer>
//             <AppStack.Navigator screenOptions={{ headerShown: false }}>
//                 <AppStack.Screen
//                     name="Home"
//                     component={Home}
//                     options={{
//                         headerTitle: props => <Text>OK</Text>,
//                         headerRight: () => (
//                             <Button
//                                 onPress={() => alert('This is a button!')}
//                                 title="Info"
//                                 color="#fff"
//                             />
//                         ),
//                     }}
//                 />
//                 {/* <AppStack.Screen name="Home" component={Home} /> */}
//                 <AppStack.Screen name="MapaRegioes" component={MapaRegioes} />
//                 <AppStack.Screen name="MapaRegiao" component={MapaRegiao} />
//                 <AppStack.Screen name="RegiaoNorte" component={RegiaoNorte} />
//                 <AppStack.Screen name="RegiaoNordeste" component={RegiaoNordeste} />
//                 <AppStack.Screen name="RegiaoCentroOeste" component={RegiaoCentroOeste} />
//                 <AppStack.Screen name="RegiaoSudeste" component={RegiaoSudeste} />
//                 <AppStack.Screen name="RegiaoSul" component={RegiaoSul} />
//                 {/* <AppStack.Screen name="Detail" component={Detail} /> */}
//             </AppStack.Navigator>

//         </NavigationContainer>

//     );
// }


// export default Routes;