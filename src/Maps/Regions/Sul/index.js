import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import Parana from './Parana'
import SantaCatarina from './SantaCatarina'
import RioGrandeDoSul from './RioGrandeDoSul'


function Index(props) {
  return (
    <View

      style={styles.sul}
    >
      <View style={styles.rs2Stack}>
        <Parana />
        <SantaCatarina />
        <RioGrandeDoSul />
        <Text style={styles.sul3}>SUL</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sul: {
    position: "absolute",
    top: -139,
    left: 201,
    height: 130,
    width: 114,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  sul3: {
    left: 40,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 18,
    width: 32,
    top: 35
  },
  rs2Stack: {
    width: 108,
    height: 127,
    marginLeft: 1
  },
});

export default Index;
