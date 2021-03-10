import React, { useContext } from 'react'
import { Button, View, StyleSheet, Text, Dimensions, Image } from 'react-native'
import { Switch } from 'react-native-gesture-handler'
import ToggleSwitch from '../../components/Toggle'
// import styles from './styles'
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../../contexts/auth'
import { ThemeContext } from '../../contexts/theme'


const Dashboard = () => {

  const { signOut, user } = useAuth()
  const { dark, theme, toggle } = useContext(ThemeContext);


  // console.log({ "THEME": theme })

  const handleSignOut = async () => {
    // const response = await signIn()
    signOut()
    // console.log('response')
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]} >

      <View style={[styles.containerCard, { backgroundColor: theme.backgroundCard }]}>
        <Image style={styles.img} source={{ uri: 'https://images.unsplash.com/photo-1575908906110-6be79061f273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1923&q=80' }} />
        <Text adjustsFontSizeToFit={true} style={[styles.text, { color: theme.color }]}>Olá {user ? user.name : 'Guest'}, seja bem vindo!</Text>
        <Button title="Sign Out" onPress={handleSignOut}></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  containerSwitch: {
    marginBottom: 20,
  },
  containerCard: {
    width: Dimensions.get('window').width - 50,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    top: 50
  },
  text: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center'
  },
  img: {
    width: Dimensions.get('window').width - 50,
    height: 240,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }
});


export default Dashboard;