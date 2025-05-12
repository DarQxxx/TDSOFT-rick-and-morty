import React from 'react';
import {View} from 'react-native';
import CharacterInfoParagraph from './CharacterInfoParagraph';
import CharacterImg from './CharacterImg';
import {styles} from '../CharacterList.styled';
import {CharacterCardProps} from '../../../../../types/CharacterCardProps';

export default function CharacterCard({
  name,
  status,
  species,
  image,
  origin,
  gender,
  id,
}: CharacterCardProps) {
  return (
    <View style={styles.shadowWrapper}>
      <View style={styles.shadow} />
      <View style={styles.card}>
        <View style={{paddingTop: 8}}>
          <CharacterInfoParagraph label="Name" text={name} />
          <CharacterInfoParagraph label="Status" text={status} />
          <CharacterInfoParagraph label="Species" text={species} />
        </View>
        <View>
          <CharacterImg
            name={name}
            status={status}
            origin={origin}
            gender={gender}
            image={image}
            id={id}
            species={species}
          />
        </View>
      </View>
    </View>
  );
}
