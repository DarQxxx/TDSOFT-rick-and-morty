import React from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import SearchIcon from '../../assets/Search.svg';
import CrossIcon from '../../assets/Cross.svg';

export default function Search({
  value,
  handleInputChange,
}: {
  value: string;
  handleInputChange: (text: string) => void;
}) {
  return (
    <View style={styles.inputWrapper}>
      <SearchIcon style={styles.iconSearch} />
      <TextInput
        value={value}
        onChangeText={handleInputChange}
        style={styles.input}
        placeholder="Search the characters"
        placeholderTextColor="#59695C"
      />
      {value ? (
        <Pressable
          onPress={() => {
            handleInputChange('');
          }}
          style={({pressed}) => [
            styles.iconCross,
            {backgroundColor: pressed ? '#DAE4DC' : 'transparent'},
          ]}>
          <CrossIcon />
        </Pressable>
      ) : null}
    </View>
  );
}

export const styles = StyleSheet.create({
  inputWrapper: {
    marginLeft: 16,
    marginRight: 16,
    display: 'flex',
    width: '100%',
    position: 'relative',
  },
  input: {
    backgroundColor: 'white',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#162C1B',
    borderRadius: 100,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 8,
    paddingBottom: 8,
    width: '100%',
    color: '#162C1B',
  },
  iconSearch: {
    position: 'absolute',
    zIndex: 2,
    top: 11,
    left: 15,
    height: 14,
    width: 14,
  },
  iconCross: {
    position: 'absolute',
    zIndex: 2,
    top: 8,
    right: 15,
    padding: 5,
    borderRadius: 4,
  },
});
