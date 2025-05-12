import {Character} from './CharacterProps';

export type CharacterCardProps = Pick<
  Character,
  'name' | 'status' | 'species' | 'image' | 'gender' | 'id'
> & {
  origin: string;
};
