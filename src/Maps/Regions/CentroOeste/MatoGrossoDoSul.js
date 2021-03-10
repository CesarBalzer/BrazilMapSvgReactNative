import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function MatoGrossoDoSul(props) {
  return (
    <View style={styles.ms2}>
      <View style={styles.path50Stack}>
        <Svg viewBox="-0.5 -0.5 95.3 97.38" style={styles.path50}>
          <Path
            strokeWidth={1}
            fill="rgba(149,122,69,1)"
            stroke="rgba(0,0,0,1)"
            d="M63.12 12.62 L60.04 11.08 L58.81 9.54 L58.04 8.62 L58.04 6.47 L58.04 3.69 L58.04 1.39 L58.04 0.00 L56.50 0.31 L55.27 1.08 L54.65 2.62 L54.03 4.31 L53.26 5.85 L52.34 6.16 L50.49 6.62 L48.03 6.16 L46.18 5.08 L44.49 3.54 L43.41 4.62 L42.33 6.16 L39.56 6.47 L35.87 5.70 L34.18 4.46 L32.79 2.92 L30.64 2.31 L27.86 2.00 L26.32 1.23 L24.94 0.31 L24.17 1.08 L20.78 2.31 L18.17 2.62 L16.78 2.92 L15.09 4.77 L13.39 5.70 L11.39 7.39 L8.62 7.54 L4.93 8.01 L4.00 10.16 L6.00 12.16 L5.85 16.01 L4.77 19.40 L4.77 22.17 L5.54 23.40 L5.70 26.02 L4.46 28.48 L1.54 31.25 L0.00 33.56 C0.00 33.56 0.46 34.79 0.77 35.41 C1.08 36.02 1.69 37.10 2.31 37.56 C2.92 38.02 3.54 38.64 3.54 38.64 L2.62 41.10 L0.92 41.72 L0.92 44.18 L1.39 46.95 L1.54 49.26 L1.54 52.19 C1.54 52.19 1.39 53.42 2.31 54.03 C3.23 54.65 3.54 55.27 3.54 55.27 L3.54 57.73 L3.39 60.35 L2.31 62.66 L1.39 64.35 L1.08 66.20 L3.39 66.81 L4.93 65.27 L6.62 65.43 L8.01 66.66 L12.32 67.43 L15.55 67.58 L17.70 67.43 L20.01 66.50 L23.25 66.20 L25.09 66.50 C25.09 66.50 29.56 68.81 30.33 69.28 C31.10 69.74 31.87 71.74 31.87 71.74 L32.02 75.74 L32.02 80.51 C32.02 80.51 32.64 82.51 32.79 83.13 C32.94 83.75 34.79 86.67 35.10 87.29 C35.41 87.90 36.95 89.75 36.95 89.75 L38.18 90.67 L40.33 88.21 L42.49 86.67 L44.34 85.90 L45.57 87.29 L46.95 90.21 L46.95 92.52 L47.72 94.98 C47.72 94.98 47.57 95.60 48.49 95.29 C49.42 94.98 49.88 94.06 49.88 94.06 L50.19 91.75 C50.19 91.75 49.57 90.21 50.34 89.60 C51.11 88.98 52.03 87.29 52.03 87.29 L54.80 83.75 L56.19 81.28 L58.04 78.67 L59.27 75.59 L60.81 73.74 C60.81 73.74 64.35 71.74 64.96 71.58 C65.58 71.43 67.89 69.12 67.89 69.12 L72.05 67.43 L74.82 64.81 L76.51 61.12 L79.28 56.96 L80.51 54.80 L81.74 52.19 L83.75 49.57 L84.05 46.18 L84.98 44.34 L87.59 42.64 L90.52 41.10 L91.75 40.18 L91.75 36.64 L92.67 33.41 C92.67 33.41 92.52 32.17 92.67 31.25 C92.83 30.33 93.91 30.02 92.83 29.40 C91.75 28.79 88.83 26.79 88.83 26.79 C88.83 26.79 86.36 24.79 85.75 24.48 C85.13 24.17 82.98 22.94 82.98 22.94 L80.51 21.55 C80.51 21.55 79.44 21.24 78.36 21.24 C77.28 21.24 73.59 20.32 73.59 20.32 L71.28 19.70 L70.20 18.47 L67.43 16.32 L64.96 14.32 L63.12 12.62 Z"
          ></Path>
        </Svg>
        <Text style={styles.matoGrossoDoSul}>Mato Grosso do Sul</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ms2: {
    position: "absolute",
    top: 110,
    left: 40,
    height: 83,
    width: 86,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path50: {
    position: "absolute",
    height: 82,
    width: 85,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  matoGrossoDoSul: {
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 40,
    width: 35,
    fontSize: 8,
    textAlign: "center",
    top: 19,
    left: 22
  },
  path50Stack: {
    width: 85,
    height: 82
  },
});

export default MatoGrossoDoSul;
