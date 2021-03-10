import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Amapa from './Amapa';
import Amazonas from './Amazonas';
import Para from './Para';
import Rondonia from './Rondonia';
import Roraima from './Roraima';
import Tocantins from './Tocantins';
import Acre from './Acre'
import { useNavigation } from '@react-navigation/native';


function RegiaoNorte({ navigation: { navigate } }) {

  const navigation = useNavigation();

  const handleNavigation = (obj) => {
    navigation.navigate(obj);
  }

  return (
    <View styles={styles.container}>
      <Text style={styles.titulo}>Região Norte</Text>
      <View style={styles.map}>

        <TouchableOpacity onPress={() => navigate('HandleEstado', {
          component: <Para />
        })}>
          <Para />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('HandleEstado', {
          component: <Amapa />
        })}>
          <Amapa />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('HandleEstado', {
          component: <Amazonas />
        })}>
          <Amazonas />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('HandleEstado', {
          component: <Acre />
        })}>
          <Acre />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('HandleEstado', {
          component: <Rondonia />
        })}>
          <Rondonia />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('HandleEstado', {
          component: <Roraima />
        })}>
          <Roraima />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('HandleEstado', {
          component: <Tocantins />
        })}>
          <Tocantins />
        </TouchableOpacity>

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

  container: {
    backgroundColor: 'red',
    // position: "relative",
    // height: 450,
    // width: 474,
    top: 140,
    left: 20,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  titulo: {
    top: 80,
    textAlign: 'center',
    fontSize: 36
  },
  map: {
    top: 180,
    left: '65%',
    transform: [{ scale: 2.3 }],
    // flex: 1,
    // textAlign: 'center',
    // alignContent: 'center',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  back: {
    top: 40,
    marginLeft: 1
  },

});

export default RegiaoNorte;
