import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { PrimaryButton } from './PrimaryButton';
import { colors } from '../constants/colors';
import { buttonTitles } from '../constants/buttonTitles';
import { useStore } from '../state/state';
import firestore from '@react-native-firebase/firestore';

export const Modal = () => {
  const { setIsModalOpen, newsIdToDelete, setNews, news } = useStore();

  const removeNews = () => {
    firestore()
      .collection('news')
      .doc(newsIdToDelete)
      .delete()
      .then(() => {
        setNews(news.filter(newsItem => newsItem.id !== newsIdToDelete));
      })
      .catch(error => console.error(error));
  };

  const closeOnPressHandle = () => setIsModalOpen(false);
  const deleteOnPressHandle = () => {
    removeNews();
    setIsModalOpen(false);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.modal}>
        <View style={styles.line} />
        <TouchableOpacity onPress={deleteOnPressHandle}>
          <PrimaryButton title={buttonTitles.delete} isDisabled={false} />
        </TouchableOpacity>

        <TouchableOpacity onPress={closeOnPressHandle}>
          <PrimaryButton title={buttonTitles.close} isDisabled={false} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: 2,
    backgroundColor: colors.MODAL_BG,
  },
  modal: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    paddingHorizontal: 34,
    paddingBottom: 34,
    paddingTop: 10,
    backgroundColor: colors.CARD_BG,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  line: {
    alignSelf: 'center',
    width: 45,
    height: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: colors.MODAL_SWIPER_BG,
  },
});
