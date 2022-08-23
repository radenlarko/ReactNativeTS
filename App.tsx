import React from 'react';
import {AppStateStatus, Platform} from 'react-native';
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {useAppState, useOnlineManager} from './src/hooks';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';

function onAppStateChange(status: AppStateStatus) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 2}},
});

const App = () => {
  useOnlineManager();

  useAppState(onAppStateChange);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
