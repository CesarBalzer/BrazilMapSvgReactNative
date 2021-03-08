import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Map from './src/Maps/Map'
import BrMap from './src/Maps/BrMap'


const App = () => {



  return (
    <View style={styles.container}>
      <View style={styles.mapbox}>
        <Map />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // // alignItems: 'center',
    // // justifyContent: 'center',
    // width: '100%',
    // height: '100%'
  },
  mapbox: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 100,
    // backgroundColor: 'green',
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: 500,
    // height: 600,
  }
});

export default App