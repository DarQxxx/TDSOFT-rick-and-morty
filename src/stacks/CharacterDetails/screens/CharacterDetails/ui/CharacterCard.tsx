import React from 'react';
import {View, ScrollView} from 'react-native';
import CharacterInfoParagraph from './CharacterInfoParagraph';
// import CharacterImg from './CharacterImg';
import {styles} from '../CharacterDetails.styled';
import {CharacterCardProps} from '../../../../../types/CharacterCardProps';
import CardTitle from './CardTitle';
import CharacterImg from './CharacterImg';
import LikeButton from './LikeButton';

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
    <ScrollView style={{paddingLeft: 16, paddingRight: 16}}>
      <View style={styles.shadowWrapper}>
        <View style={styles.shadow} />
        <View style={styles.card}>
          <CharacterImg imgUrl={image} />
          <CardTitle name={name} />
          <View style={styles.paragraphsContainer}>
            <CharacterInfoParagraph label="Status" text={status} />
            <CharacterInfoParagraph label="Origin" text={origin} />
            <CharacterInfoParagraph label="Species" text={species} />
            <CharacterInfoParagraph label="Gender" text={gender} />
          </View>
          <LikeButton
            name={name}
            status={status}
            species={species}
            image={image}
            origin={origin}
            gender={gender}
            id={id}
          />
        </View>
      </View>
    </ScrollView>
  );
}
