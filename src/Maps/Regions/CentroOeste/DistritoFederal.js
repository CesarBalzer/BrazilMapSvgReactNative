import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

function DistritoFederal(props) {
  return (
    <View style={styles.df2}>
      <View style={styles.path49Stack}>
        <Svg viewBox="-0.5 -0.5 21.68 12.06" style={styles.path49}>
          <Path
            strokeWidth={1}
            fill="rgba(112,97,76,1)"
            stroke="rgba(0,0,0,1)"
            d="M1.84 10.06 L17.20 10.06 L18.82 9.52 L18.93 7.57 L19.68 7.03 L19.57 5.73 L19.25 4.11 L19.14 2.27 L17.41 1.08 C17.41 1.08 14.82 0.00 14.38 0.00 C13.95 0.00 10.17 0.11 10.17 0.11 L6.81 0.22 L6.60 1.51 L3.14 1.19 L1.62 0.87 L1.51 2.92 L0.00 4.00 L0.32 6.16 L0.32 7.79 L1.41 7.89 L1.73 8.76 L1.84 10.06 Z"
          ></Path>
        </Svg>
        <Text style={styles.distritoFederal}>Distrito Federal</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  df2: {
    position: "absolute",
    top: 36,
    left: 82,
    height: 10,
    width: 19,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path49: {
    position: "absolute",
    height: 8,
    width: 18,
    top: 1,
    left: 29,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  distritoFederal: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 47,
    fontSize: 8,
    textAlign: "center"
  },
  path49Stack: {
    width: 47,
    height: 22,
    marginTop: -1,
    marginLeft: -29
  },
});

export default DistritoFederal;
