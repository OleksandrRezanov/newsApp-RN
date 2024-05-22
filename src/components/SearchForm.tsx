import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';
import { SearchLightIcon } from './SearchLightIcon';
import { useStore } from '../state/state';

export const SearchForm: React.FC = () => {
  const { searchParams, setSearchParams } = useStore();
  return (
    <View style={styles.wrapper}>
      <SearchLightIcon style={styles.icon} />
      <TextInput
        style={styles.input}
        onChangeText={setSearchParams}
        value={searchParams}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flex: 1,
  },
  icon: {
    position: 'absolute',
    left: 14,
    top: 11,
  },
  input: {
    height: 48,
    borderRadius: 10,
    paddingLeft: 48,
    backgroundColor: colors.INPUT_BG,
  },
});
