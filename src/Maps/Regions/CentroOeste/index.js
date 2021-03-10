import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import DistritoFederal from "./DistritoFederal";
import Goias from "./Goias";
import MatoGrosso from "./MatoGrosso";
import MatoGrossoDoSul from "./MatoGrossoDoSul";

function Index(props) {
  return (
    <View
      style={styles.centroOeste}
    >
      <View style={styles.go2Stack}>
        {/* Distrito Federal precisa estar dentro junto com Goias */}
        <View style={styles.go2}>
          <View style={styles.path48Stack}>
            <Goias />
            <DistritoFederal />
          </View>
        </View>
        <MatoGrossoDoSul />
        <MatoGrosso />
        <Text style={styles.centroOeste3}>CENTRO-OESTE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  centroOeste: {
    position: "absolute",
    top: -310,
    left: 147,
    height: 196,
    width: 187,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  go2: {
    position: "absolute",
    top: 57,
    left: 96,
    height: 79,
    width: 87,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path48Stack: {
    width: 112,
    height: 78,
    marginLeft: -26
  },
  centroOeste3: {
    top: 68,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 26,
    width: 103
  },
  go2Stack: {
    width: 183,
    height: 194,
    marginLeft: 1
  },
});

export default Index;
