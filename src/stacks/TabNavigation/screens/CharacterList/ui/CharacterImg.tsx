import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {styles} from '../CharacterList.styled';
import StarIcon from '../../../../../../assets/Vector.svg';
import {useFavourites} from '../../../../../context/FavouritesContext';
import {CharacterCardProps} from '../../../../../types/CharacterCardProps';

export default function CharacterImg({
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
    <View style={{position: 'relative'}}>
      <Image source={{uri: image}} style={styles.img} resizeMode="cover" />
      <Pressable
        onPress={() =>
          toggleFavourites({name, status, species, image, origin, gender, id})
        }
        style={({pressed}) => [
          styles.likeButtonContainer,
          {backgroundColor: pressed ? '#DAE4DC' : 'white'},
        ]}>
        <View style={styles.likeButtonContent}>
          <StarIcon
            stroke={isFavourite(id) ? '#F89F34' : '#224229'}
            fill={isFavourite(id) ? '#F89F34' : 'transparent'}
          />
          <Text style={styles.likeButtonText}>Like</Text>
        </View>
      </Pressable>
    </View>
  );
}
