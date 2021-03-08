import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Ceara(props) {
  return (
    <View style={styles.ce2}>
      <View style={styles.path46Stack}>
        <Svg viewBox="-0.5 -0.5 58.64 67.99" style={styles.path46}>
          <Path
            strokeWidth={1}
            fill="rgba(139,125,248,1)"
            stroke="rgba(0,0,0,1)"
            d="M3.18 2.29 L2.12 4.76 L0.53 6.53 L0.00 9.53 L0.35 11.82 L1.41 14.11 L2.65 16.41 L4.23 19.76 L5.12 24.88 L5.12 28.58 L5.47 32.11 C5.47 32.11 5.47 34.05 5.65 34.76 C5.82 35.46 6.18 37.40 6.18 37.40 L7.41 42.52 L8.29 46.05 L9.17 48.34 L11.12 50.81 L12.53 51.87 L12.88 53.46 L12.00 56.46 L10.76 58.40 L10.59 58.75 L10.76 59.11 L11.64 59.11 L11.29 59.28 L11.47 59.64 L11.64 59.64 L12.17 59.28 L11.12 58.93 L12.35 59.11 L16.94 59.46 C16.94 59.46 21.17 59.64 21.88 59.64 C22.58 59.64 25.58 59.64 25.58 59.64 L27.35 60.34 L28.41 62.81 L30.35 65.99 C30.35 65.99 31.23 65.99 32.11 65.99 C32.99 65.99 34.58 64.22 34.58 64.22 C34.58 64.22 35.82 62.81 36.70 62.63 C37.58 62.46 37.93 61.40 37.93 61.40 L38.99 60.16 L37.76 58.22 L37.05 55.58 C37.05 55.58 37.23 53.81 37.93 52.93 C38.64 52.05 38.46 48.17 38.46 48.17 L40.05 45.52 L43.23 42.87 L44.64 40.58 L46.05 37.76 L49.23 30.70 L53.11 28.23 L55.93 27.52 L56.64 26.82 L53.81 23.47 L50.46 21.17 C50.46 21.17 48.34 19.76 47.64 19.41 C46.93 19.06 42.87 16.94 42.87 16.94 L41.11 14.82 C41.11 14.82 39.87 12.88 38.82 12.35 C37.76 11.82 32.82 8.82 32.82 8.82 L29.82 6.53 L25.23 3.53 L21.17 2.47 L16.76 0.00 L14.11 0.18 L12.53 1.94 L9.53 2.12 L5.82 1.94 L3.18 2.29 Z"
          ></Path>
        </Svg>
        <Text style={styles.ceara}>Ceará</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ce2: {
    position: "absolute",
    top: 17,
    left: 75,
    height: 58,
    width: 53,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path46: {
    position: "absolute",
    height: 54,
    width: 49,
    top: 0,
    left: 10,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  ceara: {
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 15,
    width: 51,
    fontSize: 6,
    textAlign: "center",
    top: 21
  },
  path46Stack: {
    width: 59,
    height: 54,
    marginLeft: -10
  },
});

export default Ceara;
