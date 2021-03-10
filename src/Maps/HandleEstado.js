import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { Container } from './styles';
import Reactotron from 'reactotron-react-native'


const HandleEstado = ({ navigation, route }) => {
  // const route = useRoute();

  // const navigation = useNavigation();

  // Reactotron.log(props)


  const handleNavigation = (obj) => {
    navigation.navigate(obj);
  }

  return (
    <View>
      <View>
        {/* <Text>{route.params.names[0]}</Text> */}
        {route.params.component}
      </View>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>VOLTAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  back: {
    top: 40,
    marginLeft: 1
  },

});
export default HandleEstado;