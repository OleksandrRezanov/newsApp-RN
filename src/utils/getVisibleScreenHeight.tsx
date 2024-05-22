import { Dimensions, StatusBar } from 'react-native';

export const getVisibleScreenHeight = () => {
  const screenHeight = Dimensions.get('window').height;
  const statusBarHeight = StatusBar.currentHeight;

  if (statusBarHeight) {
    return screenHeight - statusBarHeight;
  }

  return screenHeight;
};
