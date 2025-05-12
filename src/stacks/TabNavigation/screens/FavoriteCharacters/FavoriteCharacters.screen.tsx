import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  Button,
  ScrollView,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {styles} from './FavoriteCharacters.styled';
import {useFavourites} from '../../../../context/FavouritesContext';
import {useDebounce} from '../../../../utils/useDebounce';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import CharacterCard from '../CharacterList/ui/CharacterCard';
import Navigation from '../../../../components/Navigation';
import {FilterCategories} from '../../../../types/FilterCategories';

const FavoriteCharactersScreen = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const nameSearch = useDebounce(searchValue, 500);
  const [selectedOptions, setSelectedOptions] = useState<{
    status: string;
    species: string;
  }>({status: '', species: ''});
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const handleInputChange = (text: string) => {
    setSearchValue(text);
  };
  const handleApply = ({
    status,
    species,
  }: {
    status: string;
    species: string;
  }) => {
    setSelectedOptions({status, species});
  };
  const {favourites} = useFavourites();

  const filteredFavourites = favourites.filter(ele => {
    const nameMatch = ele.name
      ?.toLowerCase()
      .includes(nameSearch.toLowerCase());
    const speciesMatch = selectedOptions.species
      ? ele.species.toLowerCase() === selectedOptions.species.toLowerCase()
      : true;
    const statusMatch = selectedOptions.status
      ? ele.status.toLowerCase() === selectedOptions.status.toLowerCase()
      : true;

    return nameMatch && speciesMatch && statusMatch;
  });

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 20,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}>
        <Navigation
          searchValue={searchValue}
          handleInputChange={handleInputChange}
          checkedOptions={selectedOptions}
          handleApply={handleApply}
        />

        {filteredFavourites.length === 0 ? (
          <View>
            <Text style={{textAlign: 'center'}}>
              You found nothing, add new favourite or change queries
            </Text>
          </View>
        ) : (
          [...filteredFavourites]
            .sort((a, b) => a.id - b.id)
            .map(item => (
              <Pressable
                key={item.id}
                onPress={() => {
                  navigate('CharacterDetailsStack', {
                    screen: 'CharacterDetailsScreen',
                    params: {characterId: item.id},
                  });
                }}>
                <CharacterCard
                  id={item.id}
                  name={item.name}
                  status={item.status}
                  species={item.species}
                  image={item.image}
                  gender={item.gender}
                  origin={item.origin}
                />
              </Pressable>
            ))
        )}
      </ScrollView>
    </View>
  );
};

export default FavoriteCharactersScreen;
