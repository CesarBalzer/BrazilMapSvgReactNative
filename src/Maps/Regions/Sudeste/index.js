import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import EspiritoSanto from "./EspiritoSanto";
import MinasGerais from "./MinasGerais";
import RioDeJaneiro from "./RioDeJaneiro";
import SaoPaulo from "./SaoPaulo";

function Index(props) {
  return (
    <TouchableOpacity
      onPress={() => { }}
      style={styles.sudeste}
    >
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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sudeste: {
    position: "absolute",
    top: 215,
    left: 247,
    height: 127,
    width: 160,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
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
});

export default Index;
