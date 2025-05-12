import React, {createContext, useContext, useState, ReactNode} from 'react';
import {CharacterCardProps} from '../types/CharacterCardProps';

type FavouritesContextProps = {
  favourites: CharacterCardProps[];
  toggleFavourites: ({
    name,
    status,
    species,
    image,
    origin,
    gender,
    id,
  }: CharacterCardProps) => void;
  isFavourite: (id: number) => boolean;
};

const FavouritesContext = createContext<FavouritesContextProps | undefined>(
  undefined,
);

export const FavouritesProvider = ({children}: {children: ReactNode}) => {
  const [favourites, setFavourites] = useState<CharacterCardProps[]>([]);

  const isFavourite = (characterId: number) => {
    return favourites.some(ele => ele.id === characterId);
  };

  const toggleFavourites = ({
    name,
    status,
    species,
    image,
    origin,
    gender,
    id,
  }: CharacterCardProps) => {
    const isFavourited = isFavourite(id);
    if (isFavourited) {
      setFavourites(prev => prev.filter(ele => ele.id !== id));
    } else {
      setFavourites(prev => [
        ...prev,
        {
          name,
          status,
          species,
          image,
          origin,
          gender,
          id,
        },
      ]);
    }
  };

  return (
    <FavouritesContext.Provider
      value={{favourites, toggleFavourites, isFavourite}}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) throw new Error('Please provide FavouritesProvider');
  return context;
};
