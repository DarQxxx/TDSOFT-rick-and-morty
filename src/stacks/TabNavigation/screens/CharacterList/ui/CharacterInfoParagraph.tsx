import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../CharacterList.styled';
import {CharacterInfoParagraphProps} from '../types/CharacterInfoParagraphProps';

export default function CharacterInfoParagraph({
  label,
  text,
}: CharacterInfoParagraphProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
