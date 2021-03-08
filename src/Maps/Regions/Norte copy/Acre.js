import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Acre(props) {
  return (
    <View style={styles.ac2}>
      <View style={styles.path33Stack}>
        <Svg viewBox="-0.5 -0.5 95.43 54.67" style={styles.path33}>
          <Path
            strokeWidth={1}
            fill="rgba(66,140,139,1)"
            stroke="rgba(0,0,0,1)"
            d="M80.08 47.62 L80.20 46.53 L81.16 45.33 L82.25 44.37 L83.09 43.41 L85.13 43.41 L86.46 42.93 L87.06 42.69 L89.46 42.69 L90.78 41.97 C90.78 41.97 91.02 40.52 91.02 40.16 C91.02 39.80 92.71 38.24 92.71 38.24 L93.43 37.03 L92.59 35.83 L51.83 16.71 L47.38 13.71 L45.45 13.47 L40.40 12.63 L35.47 11.66 L31.02 10.70 C31.02 10.70 26.33 9.86 25.73 9.62 C25.13 9.38 21.52 8.42 21.52 8.42 L14.79 5.89 L10.94 3.85 L8.42 3.37 L5.29 1.56 L3.01 0.00 L1.44 1.56 L0.48 2.77 L0.00 4.57 L0.36 7.09 L2.28 9.74 L2.28 12.51 C2.28 12.51 2.28 14.31 2.77 14.79 C3.25 15.27 4.93 17.07 4.93 17.07 C4.93 17.07 6.37 18.76 6.85 19.12 C7.33 19.48 9.26 21.16 9.26 21.16 L10.82 22.37 L13.59 24.17 L13.47 25.37 L11.66 26.45 L9.74 28.02 L10.70 28.86 L12.51 28.50 L14.55 28.86 L15.63 29.10 L20.32 29.34 L21.64 30.78 L21.64 32.23 L21.64 37.03 L25.73 36.79 L27.42 37.28 L28.02 37.76 C28.02 37.76 28.74 37.64 29.22 37.88 C29.70 38.12 30.78 38.12 31.62 38.12 C32.47 38.12 33.91 37.52 33.91 37.52 L35.47 36.31 L37.16 35.83 L38.24 34.63 L39.32 32.95 L41.00 30.90 L42.69 29.94 L44.25 29.58 L45.21 30.54 L44.85 32.71 L44.97 35.83 L43.65 38.36 L43.41 40.76 L43.53 43.17 L42.69 44.73 L41.36 47.38 C41.36 47.38 43.05 48.70 43.53 48.70 C44.01 48.70 45.09 49.30 45.57 49.78 C46.05 50.26 47.50 52.07 47.50 52.07 L49.66 52.67 L50.26 50.98 L52.55 50.38 L54.23 50.14 L57.12 49.90 L58.56 49.30 L60.00 49.18 L61.81 49.30 L62.41 50.50 L63.73 51.70 L65.77 52.07 C65.77 52.07 67.22 52.19 67.94 52.19 C68.66 52.19 70.10 51.58 70.10 51.58 L71.30 50.26 L72.39 49.06 L73.11 47.86 L73.83 46.29 L74.67 45.93 L75.27 45.57 L75.27 45.93 L75.39 46.05 L74.91 45.21 L75.15 45.33 "
          ></Path>
        </Svg>
        <Svg viewBox="-0.5 -0.5 5.01 4.4" style={styles.path34}>
          <Path
            strokeWidth={1}
            fill="rgba(0,0,0,1)"
            stroke="rgba(0,0,0,1)"
            d="M3.01 2.40 L2.16 1.68 L1.56 0.96 L0.00 0.00 "
          ></Path>
        </Svg>
        <Text style={styles.acre}>Acre</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ac2: {
    position: "absolute",
    top: 138,
    left: 0,
    height: 47,
    width: 86,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path33: {
    position: "absolute",
    height: 45,
    width: 85,
    top: 2,
    left: 28,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  path34: {
    position: "absolute",
    height: 4,
    width: 4,
    top: 38,
    left: 85,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  acre: {
    left: 27,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 22,
    width: 82,
    fontSize: 8,
    textAlign: "center",
    top: 18
  },
  path33Stack: {
    width: 103,
    height: 45,
    marginLeft: -18
  },
  pa30StackStack: {
    width: 331,
    height: 213,
    marginLeft: 1
  },
});

export default Acre;
