import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Index(props) {
  return (
    <View style={styles.rs2}>
      <View style={styles.path56Stack}>
        <Svg viewBox="-0.5 -0.5 102.89 90.03" style={styles.path56}>
          <Path
            strokeWidth={1}
            fill="rgba(255,131,66,1)"
            stroke="rgba(0,0,0,1)"
            d="M49.71 0.13 L51.99 0.00 L53.46 0.00 L54.80 0.40 L56.27 1.21 C56.27 1.21 57.61 1.34 58.42 1.34 C59.22 1.34 60.29 1.34 60.96 1.34 C61.63 1.34 64.31 1.34 64.31 1.34 L65.92 1.47 L67.26 2.01 L69.40 2.68 L70.74 2.55 L73.42 2.95 L76.10 4.69 L78.11 5.09 L79.45 5.49 L81.33 6.70 L83.74 9.24 L86.82 11.66 L88.30 13.67 L89.37 15.81 L91.51 17.15 L93.92 18.62 L96.87 18.62 L99.42 19.16 C99.42 19.16 99.15 20.23 99.15 20.77 C99.15 21.30 97.81 23.58 97.81 23.58 L96.60 26.39 L96.07 28.94 C96.07 28.94 96.47 29.88 97.00 29.88 C97.54 29.88 98.48 29.61 98.48 29.61 L99.68 30.01 L100.62 30.68 L100.89 31.75 L95.00 39.93 L91.38 46.49 L86.96 53.06 L82.67 57.48 L81.33 59.62 L78.92 60.83 L75.97 61.23 L73.56 63.51 C73.56 63.51 71.55 66.59 71.41 67.13 C71.28 67.66 69.94 69.14 69.94 70.07 C69.94 71.01 69.40 72.49 69.40 73.02 C69.40 73.56 68.06 77.04 68.06 77.04 L62.03 82.00 C62.03 82.00 60.43 83.20 59.89 83.74 C59.36 84.28 56.27 86.42 56.27 86.42 L54.67 88.03 L53.19 85.62 C53.19 85.62 52.25 83.47 52.25 82.80 C52.25 82.13 52.12 80.79 53.06 80.26 C54.00 79.72 56.54 75.97 56.54 75.97 L56.01 73.02 L52.92 70.34 C52.92 70.34 50.38 68.73 49.84 67.80 C49.31 66.86 47.03 64.45 47.03 64.45 L43.41 61.23 L40.46 59.09 L37.78 56.94 L34.30 55.87 L31.75 54.53 L29.74 51.85 C29.74 51.85 28.27 49.84 27.60 49.71 C26.93 49.57 25.59 49.44 25.59 49.44 L24.25 50.78 L23.18 51.99 L21.44 53.59 C21.44 53.59 20.10 54.00 19.96 53.46 C19.83 52.92 19.43 49.71 19.43 49.71 L19.03 47.83 L17.55 46.36 C17.55 46.36 16.21 44.88 15.68 44.75 C15.14 44.62 14.34 43.95 14.34 43.95 L12.86 42.47 L11.25 40.73 C11.25 40.73 10.45 40.06 9.78 40.20 C9.11 40.33 7.91 40.46 7.91 40.46 L6.03 42.74 L4.56 44.08 L2.41 45.02 L0.13 43.14 L0.00 41.54 L3.08 37.78 L6.97 34.57 L9.65 30.95 L11.25 28.94 L14.74 26.53 C14.74 26.53 14.87 25.99 15.54 24.52 C16.21 23.05 16.75 21.84 16.75 21.84 L18.22 20.23 L21.04 18.22 C21.04 18.22 23.85 17.15 24.79 17.15 C25.73 17.15 26.93 15.54 26.93 15.54 L28.40 12.73 L30.41 11.25 L33.09 10.58 L35.91 9.78 L36.98 8.31 L38.32 6.30 L41.40 4.82 L43.81 3.35 L45.55 1.74 L47.83 0.80 L49.71 0.13 Z"
          ></Path>
        </Svg>
        <Text style={styles.rioGrandeDoSul2}>RS</Text>
        {/* <Text style={styles.rioGrandeDoSul}>Rio Grande do Sul</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rs2: {
    position: "absolute",
    top: 44,
    left: 0,
    height: 76,
    width: 91,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path56Stack: {
    width: 88,
    height: 73
  },
  path56: {
    position: "absolute",
    height: 73,
    width: 88,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  rioGrandeDoSul2: {
    top: 12,
    left: 33,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 35,
    width: 35,
    // flexWrap: 'wrap',
    flexShrink: 1,
    fontSize: 7,
    textAlign: "center"
  },
  rioGrandeDoSul: {
    top: 12,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 6,
    textAlign: "center",
    height: 0,
    width: 0,
    opacity: 0
  },
});

export default Index;
