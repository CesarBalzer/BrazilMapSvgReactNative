import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Alagoas(props) {
  return (
    <View style={styles.al2}>
      <View style={styles.path42Stack}>
        <Svg viewBox="-0.5 -0.5 40.8 23.5" style={styles.path42}>
          <Path
            strokeWidth={1}
            fill="rgba(250,220,210,1)"
            stroke="rgba(0,0,0,1)"
            d="M0.00 7.01 L0.91 4.80 L2.82 2.36 L4.57 1.60 L7.09 2.52 L10.22 4.35 C10.22 4.35 9.38 4.57 10.52 5.34 C11.66 6.10 12.58 6.86 12.58 6.86 C12.58 6.86 14.33 7.39 14.64 7.47 C14.94 7.55 15.78 7.55 16.31 7.62 C16.85 7.70 18.91 6.94 18.91 6.94 C18.91 6.94 20.43 6.10 20.74 6.02 C21.04 5.95 21.96 4.80 21.96 4.80 L23.40 3.74 L25.31 2.59 L27.37 1.98 L28.66 1.68 C28.66 1.68 30.04 1.98 30.34 2.29 C30.65 2.59 32.48 2.97 32.48 2.97 C32.48 2.97 33.16 2.59 33.62 2.59 C34.08 2.59 35.60 1.91 35.60 1.91 C35.60 1.91 36.97 0.99 37.28 0.99 C37.58 0.99 38.57 0.00 38.57 0.00 L38.80 0.76 L36.44 1.30 L36.90 2.59 L37.05 4.04 L35.14 6.33 L33.39 8.16 L31.64 9.30 L30.65 10.06 L29.50 12.12 C29.50 12.12 28.05 13.87 28.13 14.26 C28.21 14.64 28.13 15.48 28.05 15.78 C27.98 16.09 26.83 17.30 26.83 17.30 L25.61 19.29 L24.39 19.82 L22.87 21.35 L20.81 21.50 C20.81 21.50 19.21 19.67 18.83 19.52 C18.45 19.36 16.47 18.22 16.47 18.22 L14.64 16.39 L12.96 14.87 L10.75 13.04 L8.31 11.66 L6.10 10.83 L3.66 10.06 L1.60 9.68 L0.84 9.00 L0.00 7.01 Z"
          ></Path>
        </Svg>
        <Text style={styles.alagoas}>Alagoas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  al2: {
    position: "absolute",
    top: 80,
    left: 104,
    height: 19,
    width: 36,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path42: {
    position: "absolute",
    height: 18,
    width: 35,
    top: 0,
    left: 6,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  alagoas: {
    top: 4,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 15,
    width: 51,
    fontSize: 6,
    textAlign: "center"
  },
  path42Stack: {
    width: 51,
    height: 19,
    marginLeft: -6
  },
});

export default Alagoas;
