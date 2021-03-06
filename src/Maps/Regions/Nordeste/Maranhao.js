import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Maranhao(props) {
  return (
    <View style={styles.ma2}>
      <View style={styles.path44Stack}>
        <Svg viewBox="-0.5 -0.5 90.32 121.39" style={styles.path44}>
          <Path
            strokeWidth={1}
            fill="rgba(254,74,41,1)"
            stroke="rgba(0,0,0,1)"
            d="M33.88 0.00 L32.48 1.40 L31.27 3.81 L31.27 6.42 L30.47 8.62 L29.47 11.43 L28.27 13.63 L28.27 16.24 L27.26 19.65 L26.86 22.45 L26.26 24.66 L24.46 27.06 L22.25 29.47 L20.45 32.48 L18.84 33.28 L16.84 35.08 L14.43 36.69 L12.43 38.89 L10.22 41.50 L8.22 42.90 L5.81 44.10 L4.01 46.31 L1.80 47.91 L0.40 50.12 L0.00 51.52 L0.20 53.32 L2.21 53.32 L4.01 52.32 L6.21 51.32 L8.82 51.52 C8.82 51.52 12.03 53.53 12.83 53.73 C13.63 53.93 14.43 54.93 14.43 54.93 L14.03 73.57 L12.23 75.78 L11.23 76.98 L13.03 78.58 L12.23 81.19 L12.43 83.80 L15.64 86.20 L18.84 87.81 L22.25 89.01 L24.66 88.61 L26.86 87.81 L26.86 89.21 L25.66 91.01 L21.65 94.82 L20.05 100.84 L22.85 102.84 C22.85 102.84 23.66 103.04 24.46 104.44 C25.26 105.85 25.46 106.85 25.46 106.85 L25.66 108.25 L26.26 113.47 L28.67 115.87 L32.08 117.47 C32.08 117.47 32.48 118.88 33.68 119.28 C34.88 119.68 35.88 118.88 35.88 118.88 L37.49 114.67 L38.89 111.46 L37.29 107.45 L36.49 101.84 L36.49 98.43 C36.49 98.43 39.29 95.02 39.69 94.02 C40.09 93.02 41.10 87.20 41.10 87.20 L42.50 83.60 L45.31 81.99 L49.52 79.99 L52.72 79.79 L55.33 78.38 L57.74 75.98 L59.54 74.17 L61.14 72.97 L63.55 72.37 L65.15 73.17 L66.36 74.17 L68.76 73.37 L69.76 72.77 L71.77 72.37 L74.57 71.57 L75.98 69.36 L71.17 56.53 L73.77 53.53 L74.98 50.72 L76.58 47.91 L76.98 44.91 L75.18 41.30 L74.98 38.69 L75.98 36.49 L77.78 34.68 L79.59 31.07 L81.19 28.47 L85.00 26.46 L86.80 25.26 L87.81 22.25 C87.81 22.25 88.81 21.05 88.01 21.05 C87.20 21.05 84.80 21.05 84.80 21.05 C84.80 21.05 83.19 20.45 82.39 21.25 C81.59 22.05 79.79 22.25 79.79 22.25 L77.78 19.85 C77.78 19.85 74.78 18.24 73.77 17.64 C72.77 17.04 71.77 16.04 70.77 16.04 C69.76 16.04 67.56 16.24 66.76 16.44 C65.95 16.64 63.15 18.04 63.15 18.04 L60.94 18.84 L58.14 19.85 L56.33 21.45 L54.93 23.45 L53.53 25.06 L51.72 27.66 C51.72 27.66 50.52 26.86 50.92 26.06 C51.32 25.26 52.32 20.85 52.32 20.85 L52.92 18.24 L52.52 15.64 L50.92 14.43 L52.52 12.03 L53.32 10.22 L50.72 8.22 L46.11 5.21 C46.11 5.21 46.31 4.21 44.91 5.21 C43.50 6.21 42.70 6.42 42.70 6.42 L41.70 4.61 L39.29 2.21 L37.29 0.80 L35.68 0.00 Z"
          ></Path>
        </Svg>
        <Text style={styles.maranhao}>Maranh??o</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ma2: {
    position: "absolute",
    top: -2,
    left: -5,
    height: 104,
    width: 81,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path44: {
    position: "absolute",
    height: 103,
    width: 80,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  maranhao: {
    top: 38,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 15,
    width: 51,
    fontSize: 6,
    textAlign: "center",
    left: 14
  },
  path44Stack: {
    width: 80,
    height: 103
  },
});

export default Maranhao;
