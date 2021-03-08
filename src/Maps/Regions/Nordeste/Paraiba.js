import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

function Paraiba(props) {
  return (
    <View style={styles.pb2}>
      <View style={styles.path43Stack}>
        <Svg viewBox="-0.5 -0.5 52.92 27.54" style={styles.path43}>
          <Path
            strokeWidth={1}
            fill="rgba(201,201,255,1)"
            stroke="rgba(0,0,0,1)"
            d="M3.81 21.80 L5.26 21.50 L6.33 21.88 C6.33 21.88 6.94 22.41 7.32 22.41 C7.70 22.41 9.99 22.49 9.99 22.49 L11.74 22.41 C11.74 22.41 12.35 22.11 13.19 21.73 C14.03 21.35 14.64 20.43 14.64 20.43 L15.17 19.67 L16.24 18.37 L17.00 17.23 C17.00 17.23 19.21 17.00 19.67 17.00 C20.13 17.00 23.02 17.23 23.02 17.23 L23.10 17.99 C23.10 17.99 22.34 18.68 22.18 19.06 C22.03 19.44 20.51 21.50 20.51 21.50 C20.51 21.50 19.97 22.72 20.13 23.10 C20.28 23.48 20.28 23.71 20.51 24.24 C20.74 24.78 20.81 25.16 21.12 25.39 C21.42 25.61 21.88 25.54 22.57 25.46 C23.25 25.39 22.72 25.16 23.94 25.00 C25.16 24.85 24.70 24.70 25.92 24.78 C27.14 24.85 28.05 24.39 28.36 24.39 C28.66 24.39 29.65 24.01 30.11 23.78 C30.57 23.56 30.57 23.02 31.41 23.02 C32.25 23.02 32.55 22.64 33.70 22.57 C34.84 22.49 34.84 22.11 35.68 22.11 C36.52 22.11 36.82 21.88 37.58 21.88 C38.35 21.88 38.65 21.50 39.18 21.42 C39.72 21.35 40.48 20.81 41.09 20.43 C41.70 20.05 42.23 19.36 42.54 19.13 C42.84 18.91 43.83 18.14 44.14 17.91 C44.44 17.69 45.74 16.54 45.74 16.54 L46.43 15.63 L47.49 14.71 C47.49 14.71 48.03 13.80 48.33 13.65 C48.64 13.49 49.40 12.81 49.40 12.81 L50.92 12.20 C50.92 12.20 50.31 10.83 50.01 10.22 C49.70 9.61 49.09 8.69 49.09 7.78 C49.09 6.86 48.87 6.17 48.87 6.17 C48.87 6.17 48.94 5.57 48.26 4.88 C47.57 4.19 46.81 3.28 46.81 3.28 L46.43 2.82 L41.78 2.90 L40.56 3.58 L39.11 4.80 L38.19 5.41 L36.82 5.79 L35.60 4.88 L33.77 3.51 L33.31 2.52 L31.94 2.74 L30.80 3.51 L29.81 4.27 C29.81 4.27 29.96 5.72 29.96 6.02 C29.96 6.33 29.50 9.22 29.50 9.22 L28.36 10.14 L26.38 10.29 L24.78 8.92 C24.78 8.92 24.32 8.23 23.94 8.23 C23.56 8.23 20.35 7.85 20.35 7.85 C20.35 7.85 18.83 7.85 18.52 7.62 C18.22 7.39 17.91 6.63 17.91 6.63 L20.81 2.90 L21.27 1.37 C21.27 1.37 22.03 0.38 21.57 0.38 C21.12 0.38 21.12 0.08 20.43 0.08 C19.74 0.08 19.52 0.00 19.06 0.00 C18.60 0.00 17.76 0.00 17.76 0.00 L15.70 0.91 C15.70 0.91 14.33 1.75 13.87 1.75 C13.42 1.75 11.89 3.05 11.89 3.05 L10.29 3.89 L8.61 4.65 L7.32 4.42 L5.87 3.96 L4.96 2.97 L3.81 2.74 L3.43 3.05 L2.13 5.18 L1.98 7.93 L1.60 9.68 L0.99 11.13 L0.38 12.65 C0.38 12.65 0.38 14.79 0.76 14.94 C1.14 15.09 1.60 16.85 1.60 16.85 L1.68 18.07 L1.07 19.29 L0.08 20.13 L0.00 20.20 L0.46 20.74 L1.68 21.35 L2.97 21.73 L3.81 21.80 Z"
          ></Path>
        </Svg>
        <Text style={styles.paraiba}>Paraíba</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pb2: {
    position: "absolute",
    top: 55,
    left: 104,
    height: 23,
    width: 47,
    // borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  path43: {
    position: "absolute",
    height: 20,
    width: 43,
    top: 0,
    left: 9,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  paraiba: {
    top: 5,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 15,
    width: 51,
    fontSize: 6,
    textAlign: "center"
  },
  path43Stack: {
    width: 52,
    height: 20,
    marginLeft: -9
  },
});

export default Paraiba;