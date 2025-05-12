import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  Pressable,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {useInfiniteQuery} from '@tanstack/react-query';
import {getFilteredCharacters} from '../../../../api/getFilteredCharacters';
import CharacterCard from './ui/CharacterCard';
import {reloadAppAsync} from 'expo';
import {useDebounce} from '../../../../utils/useDebounce';
import Navigation from '../../../../components/Navigation';
import {FilterCategories} from '../../../../types/FilterCategories';

const CharacterListScreen = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<{
    status: string;
    species: string;
  }>({status: '', species: ''});
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const nameSearch = useDebounce(searchValue, 500);
  const cacheKey = `${nameSearch}status${selectedOptions.status}species${selectedOptions.species}`;
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['characters', cacheKey],
    initialPageParam: 1,
    queryFn: ({pageParam = 1}) =>
      getFilteredCharacters(pageParam, nameSearch || '', selectedOptions),
    getNextPageParam: lastPage => {
      if (!lastPage.info.next) return undefined;
      const nextPageStr = lastPage.info.next.split('page=')[1];
      return Number(nextPageStr);
    },
  });
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

  const characters = data?.pages.flatMap(page => page.results) || [];
  if (isError) {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>
          Something went wrong, try again
        </Text>
        <Button
          title="Retry"
          onPress={() => {
            reloadAppAsync();
          }}
        />
      </View>
    );
  }

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentHeight = event.nativeEvent.contentSize.height;
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const layoutHeight = event.nativeEvent.layoutMeasurement.height;

    if (
      contentOffsetY + layoutHeight >= contentHeight - 100 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={handleScroll}>
        <Navigation
          searchValue={searchValue}
          handleInputChange={handleInputChange}
          checkedOptions={selectedOptions}
          handleApply={handleApply}
        />

        {characters.map(item => (
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
              origin={item.origin.name}
            />
          </Pressable>
        ))}

        {isFetchingNextPage ||
          (isLoading && (
            <ActivityIndicator size="large" color="#000" style={{margin: 16}} />
          ))}
      </ScrollView>
    </View>
  );
};

export default CharacterListScreen;
