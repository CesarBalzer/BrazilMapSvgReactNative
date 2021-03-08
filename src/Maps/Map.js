import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Default from './Default'

function Index(props) {
  return (
    // <ScrollView horizontal={true} style={styles.container}>
    // </ScrollView>
    <Default />
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#E6E6E6",
    // width: '100%',
    // height: '100%',
    // marginTop: 100,
  }
});

export default Index;
