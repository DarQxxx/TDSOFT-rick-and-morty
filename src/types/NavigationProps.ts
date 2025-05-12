import {MultiSelectProps} from './MultiSelectProps';

export type NavigationProps = MultiSelectProps & {
  searchValue: string;
  handleInputChange: (text: string) => void;
};
