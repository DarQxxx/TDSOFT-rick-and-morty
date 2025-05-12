import {Character} from '../types/CharacterProps';

export const getCharacter = async (
  characterId: number = 1,
): Promise<Character> => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`,
  );
  if (!res.ok) throw new Error('Failed to fetch character');
  return await res.json();
};
