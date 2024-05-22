import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { HeaderButton } from '../components/HeaderButton';
import { fonts } from '../constants/fonts';
import { colors } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../constants/screens';
import {
  headerHeight,
  imageHeight,
  newsBodyHeight,
  newsBodyRadius,
} from '../constants/variables';
import { News, useStore } from '../state/state';

export const PostDetailsScreen = () => {
  const { newsItemToShow } = useStore() as { newsItemToShow: News };
  const paragraphs = newsItemToShow.newsBody.split('\n');
  const navigation = useNavigation();
  const onPressHandle = () => navigation.navigate(screens.home);

  const date = new Date(newsItemToShow.timeStamp);

  // Форматуємо дату
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>{newsItemToShow.title}</Text>
      </View>

      <Image source={{ uri: newsItemToShow.imageURL }} style={styles.image} />

      <ScrollView style={styles.body}>
        <Text style={styles.date}>{formattedDate}</Text>
        <View style={styles.news}>
          {paragraphs.map((paragraph, index) => (
            <Text style={styles.paragraph} key={index}>
              {paragraph}
            </Text>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity onPress={onPressHandle} style={styles.button}>
        <HeaderButton type="arrow" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: headerHeight,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.BOLD,
    fontSize: 20,
    lineHeight: headerHeight,
    color: colors.MAIN_TEXT,
  },
  button: {
    position: 'absolute',
    top: 22,
    left: 23,
  },
  image: {
    height: imageHeight,
  },
  body: {
    height: newsBodyHeight,
    marginTop: -newsBodyRadius,
    paddingHorizontal: 30,
    backgroundColor: colors.CARD_BG,
    borderTopLeftRadius: newsBodyRadius,
    borderTopRightRadius: newsBodyRadius,
  },
  date: {
    marginTop: 26,
    marginBottom: 15,
    fontFamily: fonts.THIN,
    color: colors.CARD_INFO_DATE,
    fontSize: 12,
    lineHeight: 20.8,
  },
  news: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  paragraph: {
    fontFamily: fonts.LIGHT,
    fontSize: 16,
    lineHeight: 20,
    color: colors.MAIN_TEXT,
  },
});
