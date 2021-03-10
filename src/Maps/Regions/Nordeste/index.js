import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import Alagoas from "./Alagoas";
import Bahia from "./Bahia";
import Ceara from "./Ceara";
import Maranhao from "./Maranhao";
import Paraiba from "./Paraiba";
import Pernambuco from "./Pernambuco";
import Piaui from "./Piaui";
import RioGrandeDoNorte from "./RioGrandeDoNorte";
import Sergipe from "./Sergipe";

function Index(props) {
  return (
    <View style={styles.nordeste}>
      <View style={styles.pe2StackStack}>
        <View style={styles.pe2Stack}>
          <Pernambuco />
          <Piaui />
          <Alagoas />
          <Paraiba />
          <Maranhao />
          <RioGrandeDoNorte />
          <Ceara />
          <Bahia />
          <Text style={styles.nordeste3}>NORDESTE</Text>
        </View>
        <Sergipe />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nordeste: {
    position: "absolute",
    top: -376,
    left: 300,
    height: 196,
    width: 165,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  nordeste3: {
    top: 52,
    left: 23,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 38,
    width: 84
  },
  pe2Stack: {
    top: 0,
    left: 0,
    width: 161,
    height: 192,
    position: "absolute"
  },

  pe2StackStack: {
    width: 161,
    height: 192,
    marginLeft: 1
  },
});

export default Index;
