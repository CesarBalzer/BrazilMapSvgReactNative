import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
// import { Container } from './styles';

const Home = () => {

  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('MapaRegioes');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.link}>HOME</Text>
      <TouchableOpacity onPress={() => handleNavigation()}>
        <Text style={styles.link}>Mapa</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9e9e9',
  },
  link: {
    fontSize: 36,
    padding: 20,
    color: '#A697CE'
  }
})

export default Home;