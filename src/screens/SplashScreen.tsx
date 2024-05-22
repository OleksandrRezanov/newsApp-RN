import React from 'react';
import { StyleSheet, View } from 'react-native';
import SplashIcon from '../components/SplashIcon';
import { colors } from '../constants/colors';

export const SplashScreen = () => (
  <View style={styles.wrapper}>
    <SplashIcon />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.SPLASH_SCREEN_BG,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
