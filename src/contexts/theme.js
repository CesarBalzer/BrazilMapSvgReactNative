import React, { createContext, useEffect, useState } from 'react';
import themes from '../components/Themes/themes'
import AsyncStorage from '@react-native-community/async-storage'

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => { }
}
const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    async function loadStorageData() {
      let storagedTheme = await AsyncStorage.getItem('@RNBrazilMapSvgReactNative:theme')

      if (!storagedTheme) {
        await AsyncStorage.setItem('@RNBrazilMapSvgReactNative:theme', 'light')
      }

      storagedTheme = await AsyncStorage.getItem('@RNBrazilMapSvgReactNative:theme')
      if (storagedTheme !== 'light')
        setDark(true)

      console.log(storagedTheme)
    }
    loadStorageData()
  }, [])

  const toggle = async () => {
    setDark(!dark)
    await AsyncStorage.setItem('@RNBrazilMapSvgReactNative:theme', dark ? 'light' : 'dark')
  }

  const theme = dark ? themes.dark : themes.light

  return (
    <ThemeContext.Provider value={{ dark, theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }