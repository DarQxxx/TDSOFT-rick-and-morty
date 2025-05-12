import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import ArrowIcon from '../../assets/Arrow.svg';
import {FilterCategories} from '../types/FilterCategories';
import {MultiSelectProps} from '../types/MultiSelectProps';
const STATUS_OPTIONS = ['Alive', 'Dead', 'Unknown'];
const SPECIES_OPTIONS = ['Human', 'Humanoid', 'Alien', 'Unknown'];

const MultiSelect = ({checkedOptions, handleApply}: MultiSelectProps) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{
    status: string;
    species: string;
  }>({
    status: '',
    species: '',
  });

  const toggleOption = (category: FilterCategories, option: string) => {
    setSelectedOptions(prevState => {
      if (selectedOptions[category] === option)
        return {...prevState, [category]: ''};
      return {...prevState, [category]: option};
    });
  };

  const renderOptionGroup = (category: FilterCategories, options: string[]) => (
    <View>
      <Text
        style={[
          styles.optionsGroupTitle,
          category === 'species' && {marginTop: 24},
        ]}>
        {category.toUpperCase()}
      </Text>
      {options.map(option => {
        const isSelected = selectedOptions[category] === option;
        return (
          <Pressable
            key={option}
            style={styles.optionRow}
            onPress={() => toggleOption(category, option)}>
            <View
              style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
              {isSelected && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.optionText}>{option}</Text>
          </Pressable>
        );
      })}
    </View>
  );

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setDropdownVisible(prev => !prev);
          setSelectedOptions(checkedOptions);
        }}
        style={({pressed}) => [
          styles.toggleButton,
          {backgroundColor: pressed ? '#162C1B' : '#224229'},
        ]}>
        <Text style={styles.filterButtonText}>Filter</Text>
        <ArrowIcon
          style={[
            styles.arrowIcon,
            dropdownVisible && {transform: [{rotate: '180deg'}]},
          ]}
        />
      </Pressable>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          <View style={{position: 'relative'}}>
            <View style={styles.shadow} />
            {renderOptionGroup('status', STATUS_OPTIONS)}
            {renderOptionGroup('species', SPECIES_OPTIONS)}

            <View style={styles.dropdownNavigation}>
              <Pressable
                onPress={() => {
                  setSelectedOptions({status: '', species: ''});
                }}
                style={({pressed}) => [
                  styles.toggleButton,
                  {
                    backgroundColor: pressed ? '#DAE4DC' : '#FFFFFF',
                    borderWidth: 1,
                    borderColor: '#224229',
                  },
                ]}>
                <Text style={[styles.filterButtonText, {color: '#224229'}]}>
                  RESET
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  handleApply(selectedOptions);
                  setDropdownVisible(false);
                }}
                style={({pressed}) => [
                  styles.toggleButton,
                  {backgroundColor: pressed ? '##162C1B' : '#224229'},
                ]}>
                <Text style={styles.filterButtonText}>APPLY</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default MultiSelect;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 10,
    width: '100%',
  },
  toggleButton: {
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: 130,
    justifyContent: 'center',
  },
  filterButtonText: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  arrowIcon: {
    marginLeft: 8,
  },
  dropdown: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#224229',
    borderRadius: 12,
    padding: 16,
  },
  optionText: {
    fontSize: 16,
    color: '#162C1B',
  },
  optionsGroupTitle: {
    color: '#59695C',
    fontSize: 14,
    fontWeight: 500,
    textTransform: 'uppercase',
  },
  shadow: {
    position: 'absolute',
    top: 1,
    left: 1,
    right: -7,
    bottom: -7,
    backgroundColor: '#224229',
    borderRadius: 25,
    zIndex: -1,
    margin: -16,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 14,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#224229',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#224229',
  },
  checkmark: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dropdownNavigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
});
