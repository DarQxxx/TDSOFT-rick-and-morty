import React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import SearchIcon from '../../assets/Search.svg';
import CrossIcon from '../../assets/Cross.svg';
import Search from './Search';
import MultiSelect from './MultiSelect';
import {FilterCategories} from '../types/FilterCategories';
import {NavigationProps} from '../types/NavigationProps';

export default function Navigation({
  searchValue,
  handleInputChange,
  checkedOptions,
  handleApply,
}: NavigationProps) {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
      }}>
      <Text style={styles.title}>Characters</Text>
      <Search value={searchValue} handleInputChange={handleInputChange} />
      <MultiSelect checkedOptions={checkedOptions} handleApply={handleApply} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 36,
    marginBottom: 16,
    color: '#162C1B',
    marginTop: 16,
    width: '100%',
  },
});
