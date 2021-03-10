import React, { useContext } from 'react'
import { Button, View, StyleSheet } from 'react-native'

import styles from './styles'

import { useAuth } from '../../contexts/auth'
import { ThemeContext } from '../../contexts/theme'

const Signin = () => {

  const { signed, user, signIn } = useAuth()
  const { dark, theme } = useContext(ThemeContext)
  // console.log(signed)
  // console.log(user)

  const handleSingIn = async () => {
    // const response = await signIn()
    signIn()
    // console.log('response')
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Button title="Sign In" onPress={handleSingIn}></Button>
    </View>
  );
}

export default Signin;