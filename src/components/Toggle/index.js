import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { ThemeContext } from "../../contexts/theme";
import styles from "./styles";

const Index = () => {

  const { dark, theme, toggle } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={!dark ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onChange={toggle}
        value={!dark}
      />

    </View>
  );
};

export default Index;
