import React from 'react';
import { View } from 'react-native';
import LoadingScreen from '../components/LoadingScreen';
import { useAuth } from '../contexts/auth'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const Routes = () => {
  const { signed, loading } = useAuth();

  // console.log({ "SIGNED": signed })
  if (loading) {
    return <LoadingScreen />
  }

  return !signed ? <AuthRoutes /> : <AppRoutes />;
}

export default Routes;