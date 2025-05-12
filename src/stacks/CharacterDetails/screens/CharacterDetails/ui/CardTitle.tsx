import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../CharacterDetails.styled';

export default function CardTitle({name}: {name: string}) {
  return (
    <View style={styles.cardTitleContainer}>
      <Text style={styles.label}>Name</Text>
      <Text style={styles.cardTitleText}>{name}</Text>
    </View>
  );
}
