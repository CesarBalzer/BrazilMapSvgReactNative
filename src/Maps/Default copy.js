import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import RegiaoNorte from './Regions/Norte'
import RegiaoNordeste from './Regions/Nordeste'
import RegiaoCentroOeste from './Regions/CentroOeste'
import RegiaoSudeste from './Regions/Sudeste'
import RegiaoSul from './Regions/Sul'


function Index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.norteStack}>
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
    // width: 467,
    // height: 444,
    width: '100%',
    height: '100%'
  },








  norteStack: {
    width: 465,
    height: 439,
    marginTop: -27,
    marginLeft: -5
  }
});

export default Index;
