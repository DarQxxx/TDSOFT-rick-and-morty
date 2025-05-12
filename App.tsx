import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MainStack} from './src/stacks/Main';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaView} from 'react-native';
import {FavouritesProvider} from './src/context/FavouritesContext';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{flex: 1}}>
        <FavouritesProvider>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </FavouritesProvider>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

export default App;
