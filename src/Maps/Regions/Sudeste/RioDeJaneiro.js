import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function RioDeJaneiro(props) {
  return (
    <View style={styles.rj2}>
      <View style={styles.path54Stack}>
        <Svg viewBox="-0.5 -0.5 50.16 29.75" style={styles.path54}>
          <Path
            strokeWidth={1}
            fill="rgba(255,168,138,1)"
            stroke="rgba(0,0,0,1)"
            d="M0.00 19.72 L2.41 21.21 L4.59 22.36 L5.39 23.51 L4.59 24.65 L4.24 26.14 L5.16 25.80 L9.52 26.14 L10.09 26.83 C10.09 26.83 10.21 27.75 10.89 27.75 C11.58 27.75 11.24 27.41 12.61 27.52 C13.99 27.63 13.65 26.95 14.33 27.06 C15.02 27.18 15.25 27.18 16.28 27.18 C17.31 27.18 18.12 26.26 18.12 26.26 L19.84 25.80 L19.84 23.96 L20.75 21.67 L22.13 21.21 C22.13 21.21 22.59 21.67 22.70 22.47 C22.82 23.28 22.47 24.31 22.47 24.31 L22.82 25.57 C22.82 25.57 23.05 25.80 23.96 25.91 C24.88 26.03 33.94 25.68 33.94 25.68 L34.17 22.25 C34.17 22.25 34.97 20.98 35.78 20.98 C36.58 20.98 37.27 19.49 37.27 19.49 C37.27 19.49 37.72 18.81 40.71 18.35 C43.69 17.89 44.26 15.82 44.26 15.82 L46.21 13.99 L47.13 12.61 L45.98 10.43 C45.98 10.43 46.67 9.40 46.78 8.94 C46.90 8.49 48.16 5.50 48.16 5.50 C48.16 5.50 46.44 3.21 45.75 3.21 C45.06 3.21 42.88 3.33 42.08 3.33 C41.28 3.33 39.33 3.44 38.64 2.98 C37.95 2.52 36.23 1.38 36.23 1.38 C36.23 1.38 35.09 0.00 34.63 0.00 C34.17 0.00 32.34 0.00 32.34 0.00 L31.76 5.62 L30.50 8.49 L29.81 10.55 L27.18 12.04 L23.96 13.53 C23.96 13.53 21.56 14.33 21.10 14.33 C20.64 14.33 18.12 14.56 18.12 14.56 L13.76 15.48 L10.32 15.37 L8.83 16.97 L4.36 18.00 L1.03 18.35 L0.00 19.72 Z"
          ></Path>
        </Svg>
        <Text style={styles.rioDeJaneiro}>Rio de Janeiro</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rj2: {
    position: "absolute",
    top: 77,
    left: 68,
    height: 24,
    width: 45,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path54: {
    position: "absolute",
    height: 23,
    width: 44,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rioDeJaneiro: {
    top: 10,
    left: 7,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 15,
    width: 51,
    fontSize: 6,
    textAlign: "center"
  },
  path54Stack: {
    width: 58,
    height: 25
  },
});

export default RioDeJaneiro;
