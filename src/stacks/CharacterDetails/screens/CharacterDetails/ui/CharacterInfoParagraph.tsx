import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../CharacterDetails.styled';
import {CharacterInfoParagraphProps} from '../../../../TabNavigation/screens/CharacterList/types/CharacterInfoParagraphProps';

export default function CharacterInfoParagraph({
  label,
  text,
}: CharacterInfoParagraphProps) {
  return (
    <View style={styles.infoParagraphElement}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
