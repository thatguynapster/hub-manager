/**
 * @format
 */

import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

// import tw from 'twrnc';
import tw from '../lib/tailwind';
import {useDeviceContext} from 'twrnc';
import {NavigationContainer, StackActions} from '@react-navigation/native';

const RiderDeliveriesList = ({navigation}: {navigation: any}) => {
  useDeviceContext(tw); // <- 👋
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={tw`flex flex-1 bg-[#f5f5f5] items-center justify-center`}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={tw`max-w-md w-full flex flex-row items-center justify-center`}></View>
    </SafeAreaView>
  );
};

export default RiderDeliveriesList;
