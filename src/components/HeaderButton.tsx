import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';
import { PlusIcon } from './PlusIcon';
import { ArrowIcon } from './ArrowIcon';

interface Props {
  type: string;
}

export const HeaderButton: React.FC<Props> = ({ type }) => (
  <View style={styles.button}>
    {type === 'add' ? <PlusIcon /> : <ArrowIcon />}
  </View>
);

const styles = StyleSheet.create({
  button: {
    width: 47,
    height: 47,
    borderRadius: 50,
    backgroundColor: colors.INPUT_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
