import {AllCharacterProps} from '../types/AllCharactersProps';

export const getFilteredCharacters = async (
  pageParam: number = 1,
  name: string,
  selectedOptions: {status: string; species: string},
): Promise<AllCharacterProps> => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pageParam}${
      name ? `&name=${name}` : ''
    }${selectedOptions.status ? `&status=${selectedOptions.status}` : ''}${
      selectedOptions.species ? `&species=${selectedOptions.species}` : ''
    }`,
  );
  if (!res.ok) throw new Error('Failed to fetch characters');
  return await res.json();
};
