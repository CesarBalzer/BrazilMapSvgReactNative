import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import Parana from './Parana'
import SantaCatarina from './SantaCatarina'
import RioGrandeDoSul from './RioGrandeDoSul'
import { useNavigation } from '@react-navigation/native';

function RegiaoSul(props) {

  const navigation = useNavigation();

  const handleNavigation = (to) => {
    navigation.navigate(to);
  }

  return (
    <View>
      <Text style={styles.titulo}>Região Sul</Text>
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
  sul: {
    position: "absolute",
    top: 389,
    left: 350,
    height: 130,
    width: 114,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    transform: [{ scale: 4 }]
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
  back: {
    top: 40,
    marginLeft: 1
  },
});

export default RegiaoSul;
