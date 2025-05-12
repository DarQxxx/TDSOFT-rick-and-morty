export type MultiSelectProps = {
  checkedOptions: {status: string; species: string};
  handleApply: ({status, species}: {status: string; species: string}) => void;
};
