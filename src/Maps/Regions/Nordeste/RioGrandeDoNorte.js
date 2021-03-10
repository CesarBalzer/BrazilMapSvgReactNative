import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function RioGrandeDoNorte(props) {
  return (
    <View style={styles.rn2}>
      <View style={styles.path45Stack}>
        <Svg viewBox="-0.5 -0.5 45.4 30.93" style={styles.path45}>
          <Path
            strokeWidth={1}
            fill="rgba(249,136,104,1)"
            stroke="rgba(0,0,0,1)"
            d="M15.88 1.94 L12.88 2.64 L11.29 4.06 L9.53 4.94 L8.12 5.64 L7.41 7.94 L6.18 9.88 L4.94 13.58 L3.18 15.70 L1.94 18.17 L0.00 20.11 L1.59 22.05 L4.23 22.76 L7.23 21.35 L10.59 19.23 L12.53 18.35 L14.47 17.82 L16.41 18.35 L16.06 19.93 L14.47 21.70 L12.88 23.82 L13.59 25.58 C13.59 25.58 14.29 25.76 15.00 25.93 C15.70 26.11 17.47 26.11 17.47 26.11 L19.76 26.29 L21.70 28.23 L23.11 28.93 L25.58 27.52 C25.58 27.52 25.94 27.34 26.11 25.93 C26.29 24.52 25.94 22.05 25.94 22.05 L26.99 21.17 L28.76 20.99 L29.29 22.23 L31.93 23.99 L34.23 23.64 L35.64 22.58 C35.64 22.58 38.29 20.82 39.17 20.99 C40.05 21.17 41.11 20.99 41.11 20.99 L43.40 21.17 L43.05 18.52 L42.17 14.29 L40.93 10.05 L39.35 7.76 C39.35 7.76 38.11 6.17 36.88 6.17 C35.64 6.17 33.35 5.11 33.35 5.11 L29.29 5.11 L26.11 3.70 L24.70 3.70 L20.64 2.29 C19.65 1.53 20.47 1.02 17.68 0.00 C16.99 -0.12 16.50 2.10 15.91 1.95 "
          ></Path>
        </Svg>
        <Text style={styles.rioGrandeDoNorte}>
          Rio Grande {"\n"} do Norte
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rn2: {
    position: "absolute",
    top: 39,
    left: 108,
    height: 25,
    width: 40,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path45: {
    position: "absolute",
    height: 25,
    width: 39,
    top: 6,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rioGrandeDoNorte: {
    top: 12,
    left: 8,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 25,
    width: 35,
    fontSize: 6,
    textAlign: "center",
    flexWrap: 'wrap'
  },
  path45Stack: {
    width: 39,
    height: 31,
    marginTop: -6
  },
});

export default RioGrandeDoNorte;
