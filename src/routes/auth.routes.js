import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Signin from '../pages/Signin'
import HeaderOptionAuth from '../components/HeaderOptionAuth'

const AuthStack = createStackNavigator()



const AuthRoutes = () => (

  <AuthStack.Navigator>
    <AuthStack.Screen name="Signin" component={Signin} options={HeaderOptionAuth} />
  </AuthStack.Navigator>
)

export default AuthRoutes