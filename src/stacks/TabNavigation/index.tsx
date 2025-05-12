import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';
import Header from '../../components/Header';
import StarIcon from '../../../assets/Star.svg';
import CharacterIcon from '../../../assets/Character.svg';
import {Dimensions, View, Text, StyleSheet} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');
const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="Characters"
        component={CharacterListScreen}
        options={{
          header: () => <Header />,
          headerStyle: {
            height: 80,
          },
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.tabBarBackground,
                {backgroundColor: focused ? '#162C1B' : '#224229'},
              ]}>
              <CharacterIcon />
              <Text style={styles.tabBarContent}>All Characters</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteCharactersScreen}
        options={{
          header: () => <Header />,
          headerStyle: {
            height: 80,
          },
          tabBarIcon: ({focused}) => (
            <View
              style={[
                styles.tabBarBackground,
                {backgroundColor: focused ? '#162C1B' : '#224229'},
              ]}>
              <StarIcon />
              <Text style={styles.tabBarContent}>Liked characters</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const styles = StyleSheet.create({
  tabBarBackground: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: 1,
    minWidth: screenWidth / 2,
    minHeight: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarContent: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
    width: '100%',
    textAlign: 'center',
    marginTop: 4,
    fontSize: 14,
    fontWeight: 400,
  },
});
