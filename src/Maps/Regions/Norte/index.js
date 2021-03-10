import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Amapa from './Amapa';
import Amazonas from './Amazonas';
import Para from './Para';
import Rondonia from './Rondonia';
import Roraima from './Roraima';
import Tocantins from './Tocantins';
import Acre from './Acre'


function Index(props) {
  return (
    <View style={styles.norte}>
      <View style={styles.pa30StackStack}>
        <View style={styles.pa30Stack}>
          <Para />
          <Amapa />
          <Tocantins />
          <Amazonas />
          <Rondonia />
          <Roraima />
        </View>
        <Acre />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  norte: {
    position: "relative",
    // top: 0,
    // left: 5,
    height: 450,
    width: 474,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },

  pa30Stack: {
    top: 0,
    left: 3,
    width: 328,
    height: 213,
    position: "absolute"
  },
  pa30StackStack: {
    width: 331,
    height: 213,
    marginLeft: 1
  },
});

export default Index;
