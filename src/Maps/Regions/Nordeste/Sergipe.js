import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Sergipe(props) {
  return (
    <View style={styles.se2}>
      <View style={styles.path40Stack}>
        <Svg viewBox="-0.5 -0.5 25.58 29.99" style={styles.path40}>
          <Path
            strokeWidth={1}
            fill="rgba(0,0,0,1)"
            stroke="rgba(0,0,0,1)"
            d="M20.13 15.43 L21.35 14.57 L22.33 13.72 L23.48 12.87 C23.48 12.87 23.73 12.20 23.42 11.89 C23.12 11.59 22.14 10.73 22.14 10.73 L21.23 10.00 L20.50 9.33 L19.03 7.93 L17.45 6.77 L16.23 5.61 L14.70 4.39 C14.70 4.39 13.48 3.48 13.24 3.29 C13.00 3.11 12.02 2.56 11.59 2.26 C11.17 1.95 10.13 1.59 9.83 1.52 C9.52 1.46 7.87 0.73 7.87 0.73 L6.53 0.43 L5.25 0.24 L4.34 0.00 L3.79 0.30 L3.30 1.34 C3.30 1.34 3.12 2.44 3.24 2.68 C3.36 2.93 3.12 4.82 3.12 4.82 L3.48 5.55 C3.48 5.55 3.48 6.28 4.03 6.52 C4.58 6.77 5.31 7.80 5.31 7.80 L6.11 8.48 L6.65 9.76 C6.65 9.76 6.59 10.37 6.47 10.91 C6.35 11.46 5.80 12.50 5.80 12.50 L5.19 14.02 L4.64 15.12 C4.64 15.12 3.54 15.43 3.30 15.49 C3.06 15.55 2.63 15.00 1.84 15.85 C1.04 16.71 0.56 17.01 0.56 17.01 L0.25 18.11 C0.25 18.11 -0.05 19.33 0.01 19.82 C0.07 20.30 0.25 22.07 0.25 22.07 L0.92 22.74 L2.26 23.96 C2.26 23.96 3.12 25.06 3.24 25.37 C3.36 25.67 3.30 26.04 3.85 26.52 C4.40 27.01 5.62 27.01 5.62 27.01 L7.69 27.99 "
          ></Path>
        </Svg>
        <Svg viewBox="-0.5 -0.5 25.56 29.68" style={styles.path41}>
          <Path
            strokeWidth={1}
            fill="rgba(254,76,38,1)"
            stroke="rgba(0,0,0,1)"
            d="M6.18 26.71 L8.07 27.38 L10.20 27.68 C10.20 27.68 10.99 27.56 11.48 27.07 C11.97 26.59 12.64 25.37 12.76 25.06 C12.88 24.76 13.74 22.87 13.86 22.44 C13.98 22.01 14.47 20.30 14.47 20.30 L15.50 19.15 L16.66 18.23 L18.25 16.83 L19.10 15.55 L20.32 14.63 L20.69 14.39 L21.18 14.09 L22.76 12.80 C22.76 12.80 23.61 12.56 23.55 12.01 C23.49 11.46 23.43 10.98 23.13 10.73 C22.82 10.49 21.48 9.33 21.18 9.21 C20.87 9.09 18.61 7.74 18.61 7.74 C18.61 7.74 17.88 6.89 17.46 6.46 C17.03 6.04 15.69 4.94 15.69 4.94 L13.86 3.72 L11.36 2.01 L9.10 1.16 C9.10 1.16 7.27 0.49 6.54 0.43 C5.81 0.37 4.35 0.00 4.35 0.00 C4.35 0.00 3.61 0.73 3.74 1.16 C3.86 1.59 4.16 3.23 4.16 3.23 L4.29 4.76 C4.29 4.76 4.47 6.28 5.02 6.46 C5.57 6.65 5.99 7.32 6.24 7.50 C6.48 7.68 6.54 9.45 6.54 9.45 L6.24 11.52 L5.50 12.68 L4.47 14.39 L3.25 14.94 L0.38 16.10 L0.08 17.87 C0.08 17.87 -0.04 19.88 0.02 20.18 C0.08 20.49 -0.23 20.85 0.75 21.71 C1.72 22.56 2.64 24.02 3.00 24.51 C3.37 25.00 3.98 25.30 4.47 25.61 C4.96 25.91 6.18 26.71 6.18 26.71 Z"
          ></Path>
        </Svg>
        <Text style={styles.sergipe}>Sergipe</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  se2: {
    position: "absolute",
    top: 92,
    left: 110,
    height: 25,
    width: 23,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path40: {
    position: "absolute",
    top: 0,
    left: 14,
    backgroundColor: "transparent",
    borderColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  path41: {
    position: "absolute",
    height: 24,
    width: 21,
    top: 0,
    left: 14,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  sergipe: {
    top: 10,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 15,
    width: 51,
    fontSize: 6,
    textAlign: "center"
  },
  path40Stack: {
    width: 51,
    height: 25,
    marginLeft: -14
  },
});

export default Sergipe;
