import React, { useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { SearchForm } from '../components/SearchForm';
import { HeaderButton } from '../components/HeaderButton';
import { NewsItem } from '../components/NewsItem';
import { getVisibleScreenHeight } from '../utils/getVisibleScreenHeight';
import { useNavigation } from '@react-navigation/native';
import { screens } from '../constants/screens';
import { News, useStore } from '../state/state';
import { Modal } from '../components/Modal';
import { SplashScreen } from './SplashScreen';
import firestore from '@react-native-firebase/firestore';
import { NotFound } from '../components/NotFound';
import { colors } from '../constants/colors';

const keyExtractor = (item: News) => item.id;

const NewsItemSeparator = () => <View style={styles.separator} />;

export const HomeScreen = () => {
  const navigation = useNavigation();
  const onPressHandle = () => navigation.navigate(screens.createNews);
  const { isLoading, isModalOpen, setNews, setIsLoading, news, searchParams } =
    useStore();

  useEffect(() => {
    setIsLoading(true);
    const subscriber = firestore()
      .collection('news')
      .onSnapshot(querySnapshot => {
        const newsFromServer: News[] = [];

        querySnapshot.forEach(documentSnapshot => {
          newsFromServer.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          } as News);
        });

        setNews(newsFromServer);
        setIsLoading(false);
      });

    return () => subscriber();
  }, [setIsLoading, setNews]);

  const preparedData = news.filter(
    newsItem =>
      newsItem.title.toLowerCase().includes(searchParams.toLowerCase()) ||
      newsItem.newsBody.toLowerCase().includes(searchParams.toLowerCase()),
  );

  return (
    <SafeAreaView>
      {isModalOpen && <Modal />}

      {isLoading ? (
        <SplashScreen />
      ) : (
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <SearchForm />

            <TouchableOpacity onPress={onPressHandle}>
              <HeaderButton type={'add'} />
            </TouchableOpacity>
          </View>

          {preparedData.length ? (
            <FlatList
              style={styles.news}
              data={preparedData}
              renderItem={({ item }) => <NewsItem item={item} />}
              keyExtractor={keyExtractor}
              ItemSeparatorComponent={NewsItemSeparator}
            />
          ) : (
            <NotFound />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 30,
    paddingTop: 30,
    height: getVisibleScreenHeight(),
    backgroundColor: colors.CARD_BG,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  news: {
    marginTop: 40,
  },
  separator: {
    height: 40,
  },
});
