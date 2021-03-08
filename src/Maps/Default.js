import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import RegiaoNorte from './Regions/Norte'
import RegiaoNordeste from './Regions/Nordeste'
import RegiaoCentroOeste from './Regions/CentroOeste'
import RegiaoSudeste from './Regions/Sudeste'
import RegiaoSul from './Regions/Sul'
import MatoGrosso from "./Regions/CentroOeste/MatoGrosso";


function Index(props) {
  return (
    <View style={styles.container}>
      <Text>Mapa do Brasil</Text>
      <View style={styles.norteStack}>
        {/* <MatoGrosso /> */}
        <RegiaoNorte />
        <RegiaoNordeste />
        <RegiaoCentroOeste />
        <RegiaoSudeste />
        <RegiaoSul />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    // justifyContent: 'center',
    // width: 467,
    // height: 444,
    width: '100%',
    height: '100%',
    top: 40,
  },
  norteStack: {
    backgroundColor: 'gray',

    width: 665,
    height: 639,
    transform: [{ scale: 1.5 }],
    marginTop: 180,
    marginLeft: 240
  }
});

export default Index;
