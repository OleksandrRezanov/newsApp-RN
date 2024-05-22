import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { screens } from '../constants/screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import { headerHeight } from '../constants/variables';
import { fonts } from '../constants/fonts';
import { HeaderButton } from '../components/HeaderButton';
import { PrimaryButton } from '../components/PrimaryButton';
import { buttonTitles } from '../constants/buttonTitles';
import { useStore } from '../state/state';
import firestore from '@react-native-firebase/firestore';

export const CreatePostScreen = () => {
  const { isButtonDisabled, setIsButtonDisabled } = useStore();

  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostImageUrl, setNewPostImageUrl] = useState('');
  const [newPostLink, setNewPostLink] = useState('');
  const [newPostBody, setNewPostBody] = useState('');

  const newsToAdd = {
    title: newPostTitle,
    imageURL: newPostImageUrl,
    link: newPostLink,
    newsBody: newPostBody,
    timeStamp: Date.now(),
  };

  const addNews = () => {
    firestore().collection('news').add(newsToAdd);
  };

  const navigation = useNavigation();
  const onPressHandle = () => navigation.navigate(screens.home);
  const onSubmit = () => {
    addNews();
    onPressHandle();
  };

  useEffect(() => {
    if (newPostTitle.trim() && newPostBody.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [newPostTitle, newPostBody, setIsButtonDisabled]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.avoidingView}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>New post</Text>
          </View>

          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                onChangeText={setNewPostTitle}
                value={newPostTitle}
                placeholder="Title*"
              />

              <TextInput
                style={styles.input}
                onChangeText={setNewPostImageUrl}
                value={newPostImageUrl}
                placeholder="Image url"
              />

              <TextInput
                style={styles.input}
                onChangeText={setNewPostLink}
                value={newPostLink}
                placeholder="Link"
              />

              <TextInput
                style={[styles.input, styles.textArea]}
                onChangeText={setNewPostBody}
                value={newPostBody}
                placeholder="Type your message here..*"
                multiline={true}
              />
            </View>
          </ScrollView>

          <TouchableOpacity onPress={onSubmit}>
            <PrimaryButton
              title={buttonTitles.public}
              isDisabled={isButtonDisabled}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressHandle} style={styles.headerButton}>
            <HeaderButton type="arrow" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  avoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flexGrow: 1,
  },
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
  formContainer: {
    marginTop: 36,
    flex: 1,
  },
  input: {
    height: 60,
    borderRadius: 10,
    paddingLeft: 30,
    backgroundColor: colors.INPUT_BG,
    marginBottom: 20,
  },
  textArea: {
    height: 155,
    paddingTop: 17,
    textAlignVertical: 'top',
  },
  headerButton: {
    position: 'absolute',
    top: 22,
    left: 0,
  },
});
