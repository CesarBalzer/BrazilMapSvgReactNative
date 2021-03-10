import React, { createContext, useContext, useEffect, useState } from 'react'
import * as auth from '../services/auth'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../services/api'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNBrazilMapSvgReactNative:user')
      const storagedToken = await AsyncStorage.getItem('@RNBrazilMapSvgReactNative:token')

      await new Promise(resolve => setTimeout(resolve, 2000))

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser))

        api.defaults.headers.Authorization = `Bearer ${storagedToken}`
      }
      setLoading(false)

    }
    loadStorageData()
  }, [])

  const signIn = async () => {
    setLoading(true)
    const response = await auth.signIn()
    setUser(response.user)

    api.defaults.headers['Authorization'] = `Bearer ${response.token}`

    await AsyncStorage.setItem('@RNBrazilMapSvgReactNative:user', JSON.stringify(response.user))
    await AsyncStorage.setItem('@RNBrazilMapSvgReactNative:token', response.token)

    await new Promise(resolve => setTimeout(resolve, 2000))

    setLoading(false)
  }

  const signOut = async () => {
    setLoading(true)
    await AsyncStorage.removeItem('@RNBrazilMapSvgReactNative:user')
    await AsyncStorage.removeItem('@RNBrazilMapSvgReactNative:token')
    setUser(null)

    await new Promise(resolve => setTimeout(resolve, 2000))

    setLoading(false)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}