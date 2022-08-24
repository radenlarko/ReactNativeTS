import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../store/AuthContext';
import {Splash} from '../screens';
import BottomTabNavigation from './BottomTabNavigation';
import LoginNavigation from './LoginNavigation';

const Navigation = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {userToken ? <BottomTabNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
