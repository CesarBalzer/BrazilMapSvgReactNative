import React, { useContext } from 'react'
import { Button, Image } from 'react-native';
import ToggleSwitch from './Toggle'
import { ThemeContext } from '../contexts/theme'

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../../assets/adaptive-icon.png')}
    />
  );
}

const HeaderOption = (props) => {

  const { dark, theme, toggle } = useContext(ThemeContext);

  return {
    // headerTintColor: '#cccccc',
    // headerStyle: {
    //   backgroundColor: !dark ? '#e9e9e9' : '#000',
    // },
    headerTitle: props => <LogoTitle {...props} />,
  }
}

export default HeaderOption