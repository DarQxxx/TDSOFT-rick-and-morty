import React from 'react';
import {Text, Pressable} from 'react-native';
import {styles} from '../CharacterDetails.styled';
import {useNavigation} from '@react-navigation/native';

export default function ReturnButton() {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Text style={styles.return}>&larr; Go back to Characters List</Text>
    </Pressable>
  );
}
