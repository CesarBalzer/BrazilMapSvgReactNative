import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Dashboard from '../pages/Dashboard'
import HeaderOptionApp from '../components/HeaderOptionApp'

const AppStack = createStackNavigator()

const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" theme={MyTheme} component={Dashboard} options={HeaderOptionApp} />
  </AppStack.Navigator>
)

export default AppRoutes