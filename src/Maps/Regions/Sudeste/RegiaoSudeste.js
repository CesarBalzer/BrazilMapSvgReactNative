import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import EspiritoSanto from "./EspiritoSanto";
import MinasGerais from "./MinasGerais";
import RioDeJaneiro from "./RioDeJaneiro";
import SaoPaulo from "./SaoPaulo";
import { useNavigation } from '@react-navigation/native';


const RegiaoSudeste = (props) => {

  const navigation = useNavigation();

  const handleNavigation = (to) => {
    navigation.navigate(to);
  }

  return (
    <View>
      <Text style={styles.titulo}>Região Sudeste</Text>
      <View style={styles.sudeste}>
        <View style={styles.mg2Stack}>
          <View style={styles.mg2}>
            <View style={styles.path52Stack}>
              <MinasGerais />
              <RioDeJaneiro />
            </View>
          </View>
          <EspiritoSanto />
          <SaoPaulo />
        </View>
        <Text style={styles.sudeste3}>SUDESTE</Text>
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
  sudeste: {
    position: "absolute",
    top: 434,
    left: 320,
    height: 127,
    width: 160,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    transform: [{ scale: 4 }]
  },
  mg2: {
    position: "absolute",
    top: 0,
    left: 23,
    height: 101,
    width: 131,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  sudeste3: {
    top: 51,
    left: 70,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 77
  },
  path52Stack: {
    width: 130,
    height: 101
  },
  mg2Stack: {
    width: 157,
    height: 125,
    marginLeft: 1
  },
  back: {
    top: 40,
    marginLeft: 1
  },
});

export default RegiaoSudeste;
