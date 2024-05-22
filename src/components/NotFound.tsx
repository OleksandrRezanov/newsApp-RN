import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NotFoundImage } from './NotFoundImage';
import { fonts } from '../constants/fonts';
import { colors } from '../constants/colors';

export const NotFound = () => (
  <View style={styles.wrapper}>
    <NotFoundImage />
    <Text style={styles.title}>No results found</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 29,
    fontFamily: fonts.MEDIUM,
    fontSize: 16,
    lineHeight: 16,
    color: colors.NOT_FOUND_TEXT,
  },
});
