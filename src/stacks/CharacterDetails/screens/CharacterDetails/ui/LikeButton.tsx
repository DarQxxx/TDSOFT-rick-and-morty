import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Start from '../../../../../../assets/Vector.svg';
import {styles} from '../CharacterDetails.styled';
import {useFavourites} from '../../../../../context/FavouritesContext';
import {CharacterCardProps} from '../../../../../types/CharacterCardProps';

export default function LikeButton({
  name,
  status,
  species,
  image,
  origin,
  gender,
  id,
}: CharacterCardProps) {
  const {toggleFavourites, isFavourite} = useFavourites();
  return (
    <Pressable
      onPress={() =>
        toggleFavourites({name, status, species, image, origin, gender, id})
      }
      style={({pressed}) => [
        styles.likeButton,
        {backgroundColor: pressed ? '#162C1B' : '#224229'},
      ]}>
      <View style={styles.likeButtonTextContainer}>
        <Start
          stroke="white"
          fill={isFavourite(id) ? '#FFFFFF' : 'transparent'}
        />
        <Text style={styles.likeButtonText}>
          {isFavourite(id) ? 'Remove from Liked' : 'Add to Liked'}
        </Text>
      </View>
    </Pressable>
  );
}
