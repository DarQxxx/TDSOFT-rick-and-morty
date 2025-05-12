import {View, Button, ActivityIndicator, Text} from 'react-native';
import React from 'react';
import {styles} from './CharacterDetails.styled';
import {useRoute, RouteProp} from '@react-navigation/native';
import CharacterCard from './ui/CharacterCard';
import ReturnButton from './ui/ReturnButton';
import {useQuery} from '@tanstack/react-query';
import {getCharacter} from '../../../../api/getCharacter';
import {reloadAppAsync} from 'expo';

const CharacterDetailsScreen = () => {
  const route = useRoute<RouteProp<{params: {characterId: number}}>>();
  const {characterId} = route.params;

  const {data, isLoading, isError} = useQuery({
    queryKey: ['character', characterId],
    queryFn: () => getCharacter(characterId),
  });
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  if (isError || !data) {
    return (
      <View style={styles.container}>
        <Text>Something went wrong</Text>
        <Button
          title="Retry"
          onPress={() => {
            reloadAppAsync();
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ReturnButton />
      <CharacterCard
        name={data?.name}
        status={data?.status}
        species={data?.species}
        image={data?.image}
        origin={data?.origin.name}
        gender={data?.gender}
        id={characterId}
      />
    </View>
  );
};

export default CharacterDetailsScreen;
