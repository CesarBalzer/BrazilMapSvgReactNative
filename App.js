import 'react-native-gesture-handler';
import React, { useContext, useState } from 'react';
import * as Font from "expo-font";
import { Image, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
// import Router from './src/routes'

import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth'
import { ThemeContext, ThemeProvider } from './src/contexts/theme'
import Routes from './src/routes'


const App = () => {

  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const cacheResourcesAsync = async () => {
    const fontAssets = cacheFonts([
      { 'roboto-regular': require("./assets/fonts/roboto-regular.ttf") },
    ]);

    await Font.loadAsync({
      'roboto-regular': require("./assets/fonts/roboto-regular.ttf"),
    });

    const images = [require('./assets/adaptive-icon.png')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    await Promise.all([...cacheImages, ...fontAssets]);
    return Promise.all(cacheImages);
  }
  const cacheFonts = (fonts) => {
    return fonts.map((font) => Font.loadAsync(font));
  }

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={cacheResourcesAsync()}
        onFinish={() => setAssetsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  const { dark } = useContext(ThemeContext)

  // console.log({ "THEME => ": dark })

  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );




}

export default App;