import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Pernambuco(props) {
  return (
    <View style={styles.pe2}>
      <View style={styles.path38Stack}>
        <Svg viewBox="-0.5 -0.5 85.8 33.33" style={styles.path38}>
          <Path
            strokeWidth={1}
            fill="rgba(156,184,231,1)"
            stroke="rgba(0,0,0,1)"
            d="M46.75 24.17 L45.91 24.47 L44.77 25.31 L42.87 27.75 L42.26 28.89 L41.26 30.65 L40.12 29.27 L38.82 26.00 L38.98 25.00 L36.84 24.85 L35.70 23.78 L34.56 23.71 L33.41 23.86 L28.38 20.81 L26.17 19.97 L24.49 19.90 L22.97 21.35 L20.76 22.34 L17.40 24.01 L16.11 25.23 L14.43 27.83 L12.07 29.88 L8.87 30.87 L6.81 29.43 C6.81 29.43 5.21 28.36 5.05 28.05 C4.90 27.75 3.53 26.61 3.30 26.30 C3.07 26.00 1.85 24.70 1.85 24.70 L0.56 23.40 C0.56 23.40 -0.13 22.34 0.02 22.03 C0.17 21.73 -0.21 20.89 0.33 20.58 C0.86 20.28 2.61 19.21 2.61 19.21 L3.68 18.83 C3.68 18.83 4.52 17.61 4.75 17.30 C4.98 17.00 6.04 15.86 6.20 15.55 C6.35 15.25 7.04 13.87 7.19 13.57 C7.34 13.26 7.80 12.35 7.80 12.35 L7.72 9.07 L6.81 5.87 C6.81 5.87 6.73 4.27 7.19 4.04 C7.65 3.81 8.79 3.58 8.79 3.58 L11.38 4.04 L17.86 4.50 L20.99 4.50 L23.20 5.03 L25.33 7.85 L26.86 10.37 C26.86 10.37 27.92 10.44 28.53 10.29 C29.14 10.14 30.52 9.22 31.05 8.92 C31.58 8.61 32.27 8.08 32.73 8.00 C33.18 7.93 33.87 8.54 33.87 8.54 C33.87 8.54 35.47 8.84 35.85 8.84 C36.23 8.84 36.84 8.46 37.22 8.61 C37.61 8.77 38.06 9.07 38.60 9.22 C39.13 9.38 40.43 9.53 40.43 9.53 L42.48 9.61 C42.48 9.61 44.08 9.76 44.47 9.45 C44.85 9.15 45.69 8.31 46.07 8.00 C46.45 7.70 47.21 6.86 47.59 6.56 C47.97 6.25 48.81 5.03 48.81 5.03 L49.65 4.65 L53.54 4.35 L55.60 4.50 L56.05 5.49 L55.67 6.48 L54.30 8.31 C54.30 8.31 52.93 9.99 52.93 10.37 C52.93 10.75 53.31 11.97 53.31 11.97 L54.45 12.65 L55.60 12.27 L60.70 11.74 L63.07 10.52 L67.11 9.45 L68.94 9.00 L71.30 8.69 L73.59 7.24 L75.95 5.79 L78.62 3.05 L80.52 1.52 L82.51 0.00 L82.89 0.46 L83.80 2.90 L83.65 6.78 L82.74 11.89 L82.74 16.31 L82.66 18.52 L81.44 20.81 L80.68 22.87 L79.15 24.62 L77.70 25.39 C77.70 25.39 76.64 25.31 76.56 25.69 C76.48 26.07 74.35 26.45 74.35 26.45 L73.51 26.38 L71.91 25.16 C71.91 25.16 71.22 24.32 70.84 24.47 C70.46 24.62 69.62 24.55 69.09 25.16 C68.56 25.77 67.26 25.84 66.65 26.22 C66.04 26.61 64.52 26.91 64.44 27.37 C64.36 27.83 63.30 28.59 62.99 29.12 C62.69 29.65 61.69 30.04 61.16 30.65 C60.63 31.26 58.65 31.33 58.65 31.33 L56.43 31.33 L54.15 30.34 L52.24 28.82 C52.24 28.82 52.01 28.89 51.71 28.28 C51.40 27.67 50.64 26.83 50.64 26.83 L49.34 26.30 L48.35 25.31 L47.82 24.70 L46.75 24.17 Z"
          ></Path>
        </Svg>
        <Text style={styles.pernambuco}>Pernambuco</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pe2: {
    position: "absolute",
    top: 65,
    left: 72,
    height: 28,
    width: 76,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path38: {
    position: "absolute",
    height: 22,
    width: 71,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  pernambuco: {
    top: 6,
    left: 4,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 15,
    width: 51,
    fontSize: 6,
    textAlign: "center"
  },
  path38Stack: {
    width: 71,
    height: 22
  },
});

export default Pernambuco;
