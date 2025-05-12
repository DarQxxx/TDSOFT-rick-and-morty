import React from 'react';
import {View, Image} from 'react-native';
import {styles} from '../CharacterDetails.styled';

export default function CharacterImg({imgUrl}: {imgUrl: string}) {
  return (
    <View>
      <Image source={{uri: imgUrl}} style={styles.img} resizeMode="cover" />
    </View>
  );
}
