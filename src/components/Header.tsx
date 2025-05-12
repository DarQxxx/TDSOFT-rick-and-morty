import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Logo from '../../assets/Rick_and_Morty.svg';

export default function Header() {
  return (
    <View style={styles.container}>
      <Logo style={{marginLeft: 16}} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#162C1B',
    height: 80,
    display: 'flex',
    justifyContent: 'center',
  },
});
