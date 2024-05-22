import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { colors } from '../constants/colors';
import { fonts } from '../constants/fonts';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../constants/screens';
import { News, useStore } from '../state/state';
import { getTimeDifference } from '../utils/getTimeDifference';

interface Props {
  item: News;
}

export const NewsItem: React.FC<Props> = ({ item }) => {
  const { setIsModalOpen, setNewsItemToShow, setNewsIdToDelete } = useStore();
  const { title, imageURL, newsBody, timeStamp, id } = item;
  const navigation = useNavigation();

  const onPressHandle = () => {
    setNewsItemToShow(item);
    navigation.navigate(screens.newsDetails);
  };
  const onLongPressHandle = () => {
    setIsModalOpen(true);
    setNewsIdToDelete(id);
  };
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPressHandle}
      onLongPress={onLongPressHandle}
    >
      <Image source={{ uri: imageURL }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {newsBody}
        </Text>
        <Text style={styles.timeStamp}>{getTimeDifference(timeStamp)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: colors.CARD_BG,
    shadowColor: colors.CARD_SHADOW,
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.07,
    shadowRadius: 40,
    elevation: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 19,
  },
  title: {
    marginBottom: 10,
    fontFamily: fonts.BOLD,
    fontSize: 20,
    lineHeight: 23.5,
    color: colors.MAIN_TEXT,
  },
  description: {
    fontFamily: fonts.LIGHT,
    fontSize: 16,
    lineHeight: 16,
    color: colors.MAIN_TEXT,
  },
  timeStamp: {
    marginTop: 5,
    fontFamily: fonts.THIN,
    color: colors.SECONDARY_TEXT,
  },
});
