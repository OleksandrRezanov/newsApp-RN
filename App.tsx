import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { PostDetailsScreen } from './src/screens/PostDetailsScreen';
import { CreatePostScreen } from './src/screens/CreatePostScreen';
import { screens } from './src/constants/screens';

const Stack = createNativeStackNavigator();

export const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={screens.home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.newsDetails}
        component={PostDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.createNews}
        component={CreatePostScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
