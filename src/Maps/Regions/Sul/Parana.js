import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Index(props) {
  return (
    <View style={styles.pr1}>
      <View style={styles.path58Stack}>
        <Svg viewBox="-0.5 -0.5 86.03 55.55" style={styles.path58}>
          <Path
            strokeWidth={1}
            fill="rgba(255,213,189,1)"
            stroke="rgba(0,0,0,1)"
            d="M3.71 25.10 L4.78 23.55 L5.02 21.76 L5.02 19.72 L6.10 18.41 C6.10 18.41 7.53 16.14 8.01 15.78 C8.49 15.42 10.16 12.91 10.16 12.91 L11.83 10.40 L13.03 7.89 L14.11 5.26 L15.18 3.94 L17.09 2.39 L20.20 1.55 L22.95 1.43 C22.95 1.43 25.70 1.79 26.42 1.67 C27.13 1.55 29.41 1.08 29.41 1.08 L30.96 0.00 L31.92 0.00 C31.92 0.00 35.02 0.84 35.50 0.72 C35.98 0.60 37.65 1.79 37.65 1.79 L39.93 2.15 L43.03 3.11 L46.86 3.71 L48.77 4.78 L50.56 5.74 L52.84 5.38 C52.84 5.38 55.70 5.26 56.30 5.38 C56.90 5.50 59.77 5.62 59.77 5.62 L62.76 6.81 L64.91 7.77 C64.91 7.77 65.86 8.85 66.10 9.68 C66.34 10.52 66.34 11.36 66.34 11.36 C66.34 11.36 65.98 12.19 65.98 13.03 C65.98 13.87 65.74 14.82 66.10 15.30 C66.46 15.78 68.02 17.93 68.37 18.77 C68.73 19.60 68.97 20.44 69.45 21.16 C69.93 21.88 70.65 22.59 70.65 23.19 C70.65 23.79 70.65 25.10 70.41 25.58 C70.17 26.06 69.81 26.42 69.81 26.42 L69.93 28.93 L71.36 29.53 C71.36 29.53 72.92 30.00 73.40 29.41 C73.87 28.81 74.11 28.09 74.11 28.09 L76.50 28.33 L78.30 28.93 L78.42 30.72 L78.42 32.75 L80.33 33.83 L82.84 33.71 C82.84 33.71 84.03 34.19 84.03 34.67 C84.03 35.14 83.20 37.77 83.20 37.77 L81.64 37.89 L79.49 36.70 L78.06 37.53 L76.50 38.37 L76.86 39.33 L78.54 40.16 L79.61 41.36 L78.77 42.55 L77.70 44.11 L76.98 45.90 L75.55 45.90 L74.35 45.78 L72.92 46.26 L71.72 46.50 L69.93 46.62 L68.73 46.74 L67.78 47.69 L66.34 48.17 L63.12 47.34 L62.04 46.38 L61.20 45.90 L59.65 44.83 L57.62 44.47 L55.11 44.59 L53.91 45.30 L51.64 46.62 L49.97 47.34 L46.98 49.01 L45.42 49.73 L43.39 51.04 L42.32 52.24 L40.28 53.31 L37.65 53.55 L34.67 53.55 L33.11 52.72 L30.24 51.76 L28.33 51.52 L26.06 50.21 L25.34 49.73 L20.44 49.97 L17.93 49.73 L16.02 48.89 L14.58 48.41 L12.43 48.41 L11.60 47.34 L10.40 46.02 C10.40 46.02 9.80 45.54 10.04 44.95 C10.28 44.35 10.16 41.96 10.16 41.96 L8.97 40.52 L7.65 39.57 L6.69 39.45 L5.38 40.52 L3.83 40.28 L1.91 40.04 L0.00 39.21 C0.00 39.21 0.36 37.89 0.60 37.41 C0.84 36.94 1.08 34.67 1.08 34.67 L2.51 31.08 L3.23 30.00 L3.83 27.85 L3.94 26.54 L3.71 25.10 Z"
          ></Path>
        </Svg>
        <Text style={styles.parana}>Paran??</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pr1: {
    position: "absolute",
    top: 0,
    left: 33,
    height: 46,
    width: 79,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path58Stack: {
    width: 67,
    height: 39,
  },
  path58: {
    position: "absolute",
    height: 39,
    width: 67,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  parana: {
    top: 12,
    left: 7,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 15,
    width: 35,
    fontSize: 6,
    textAlign: "center"
  },
});

export default Index;
