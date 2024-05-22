import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts } from '../constants/fonts';
import { colors } from '../constants/colors';
import { buttonTitles } from '../constants/buttonTitles';

interface Props {
  isDisabled: boolean;
  title: string;
}

export const PrimaryButton: React.FC<Props> = ({ title, isDisabled }) => (
  <View
    style={[
      styles.wrapper,
      isDisabled && styles.disabledBG,
      title === buttonTitles.delete && styles.dangerBG,
      !isDisabled && title !== buttonTitles.delete && styles.defaultBG,
    ]}
  >
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 14,
    borderRadius: 10,
  },
  dangerBG: {
    backgroundColor: colors.BUTTON_BG_DELETE,
  },
  disabledBG: {
    backgroundColor: colors.BUTTON_BG_DISABLED,
  },
  defaultBG: {
    backgroundColor: colors.BUTTON_BG,
  },
  text: {
    fontFamily: fonts.BOLD,
    fontSize: 24,
    lineHeight: 35,
    textAlign: 'center',
    color: colors.CARD_BG,
  },
});
