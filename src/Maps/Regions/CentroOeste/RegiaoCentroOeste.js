import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import DistritoFederal from "./DistritoFederal";
import Goias from "./Goias";
import MatoGrosso from "./MatoGrosso";
import MatoGrossoDoSul from "./MatoGrossoDoSul";
import { useNavigation } from '@react-navigation/native';

const RegiaoCentroOeste = (props) => {

  const navigation = useNavigation();

  const handleNavigation = (to) => {
    navigation.navigate(to);
  }

  return (
    <View>
      <Text style={styles.titulo}>Região Centro Oeste</Text>
      <View style={styles.centroOeste}>
        <View style={styles.go2Stack}>
          {/* Distrito Federal precisa estar dentro junto com Goias */}
          <View style={styles.go2}>
            <View style={styles.path48Stack}>
              <TouchableOpacity onPress={() => navigate('HandleEstado', {
                component: <Goias />
              })}>
                <Goias />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigate('HandleEstado', {
                component: <DistritoFederal />
              })}>
                <DistritoFederal />
              </TouchableOpacity>

            </View>
          </View>
          <MatoGrossoDoSul />
          <MatoGrosso />
          <Text style={styles.centroOeste3}>CENTRO-OESTE</Text>
        </View>
      </View>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => handleNavigation('MapaRegioes')}>
          <Text>VOLTAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    top: 80,
    textAlign: 'center',
    fontSize: 36
  },
  centroOeste: {
    position: "absolute",
    top: 360,
    left: 347,
    height: 196,
    width: 187,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    transform: [{ scale: 3 }]
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
  back: {
    top: 40,
    marginLeft: 1
  },
});

export default RegiaoCentroOeste;
