import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function EspiritoSanto(props) {
  return (
    <View style={styles.es3}>
      <View style={styles.path53Stack}>
        <Svg viewBox="-0.5 -0.5 32.75 45.94" style={styles.path53}>
          <Path
            strokeWidth={1}
            fill="rgba(246,255,6,1)"
            stroke="rgba(0,0,0,1)"
            d="M0.48 38.55 L2.15 40.28 L4.14 41.75 C4.14 41.75 5.08 41.95 5.81 42.01 C6.54 42.08 6.67 42.01 7.67 42.08 C8.67 42.14 9.40 41.61 10.07 41.68 C10.74 41.75 12.07 42.34 12.07 42.34 L13.13 43.21 L13.93 43.94 L14.53 42.74 C14.53 42.74 13.40 41.28 14.20 40.55 C15.00 39.81 15.53 38.95 16.06 38.68 C16.59 38.42 17.33 37.62 17.66 37.42 C17.99 37.22 19.26 35.69 19.26 35.69 C19.26 35.69 19.66 34.55 20.26 34.02 C20.86 33.49 21.59 32.49 21.79 32.16 C21.99 31.83 21.85 30.89 22.19 30.16 C22.52 29.43 22.72 28.23 22.72 28.23 C22.72 28.23 23.12 26.70 23.19 26.17 C23.25 25.63 23.19 24.90 23.59 24.37 C23.98 23.84 25.05 22.17 25.05 22.17 C25.05 22.17 26.32 20.84 26.71 20.37 C27.11 19.91 25.52 20.71 27.58 19.04 C29.64 17.38 29.31 17.58 29.64 17.31 C29.98 17.04 29.71 16.51 30.24 15.51 C30.78 14.51 30.84 14.31 30.64 13.78 C30.44 13.25 29.84 13.05 29.38 11.98 C28.91 10.92 28.71 10.92 28.58 10.12 C28.45 9.32 28.98 7.59 29.18 7.06 C29.38 6.52 30.38 4.66 30.38 4.66 L30.31 3.99 L28.91 3.26 L26.51 1.60 C26.51 1.60 25.18 0.13 24.78 0.07 C24.38 0.00 23.12 0.00 23.12 0.00 C23.12 0.00 21.92 0.53 21.99 1.00 C22.05 1.46 21.06 2.93 21.06 2.93 L19.79 4.39 L18.46 5.93 L16.99 7.79 L14.93 12.65 L14.20 15.31 L13.47 17.44 L12.07 19.97 L11.20 22.17 L10.80 23.70 L9.74 25.17 L8.54 27.56 C8.54 27.56 7.27 29.03 7.07 29.30 C6.87 29.56 4.81 30.63 4.81 30.63 C4.81 30.63 2.81 31.96 2.75 32.56 C2.68 33.16 2.01 34.16 1.75 34.89 C1.48 35.62 0.62 36.62 0.62 36.62 C0.62 36.62 -0.12 37.08 0.02 37.48 C0.15 37.88 0.68 38.82 0.68 38.82 L0.48 38.55 Z"
          ></Path>
        </Svg>
        <Text style={styles.espiritoSanto}>Espírito Santo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  es3: {
    position: "absolute",
    top: 43,
    left: 123,
    height: 39,
    width: 29,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path53: {
    position: "absolute",
    height: 33,
    width: 23,
    top: 0,
    left: 15,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  espiritoSanto: {
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 15,
    width: 51,
    fontSize: 6,
    textAlign: "center",
    top: 11
  },
  path53Stack: {
    width: 51,
    height: 33,
    marginLeft: -15
  },
});

export default EspiritoSanto;
