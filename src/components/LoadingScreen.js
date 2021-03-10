import React from 'react';
import { ActivityIndicator, View } from 'react-native';

// import { Container } from './styles';

const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' color='#777' />
    </View>
  )
}

export default LoadingScreen;