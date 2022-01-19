/**
 * @format
 */

import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import tw from '../lib/tailwind';
import {useDeviceContext} from 'twrnc';

const MainScreen = ({navigation}: {navigation: any}) => {
  useDeviceContext(tw); // <- 👋
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={tw`flex flex-1 bg-[#f5f5f5] items-center justify-center`}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={tw`max-w-md w-full flex flex-row items-center justify-center`}>
        <Pressable
          onPress={() => {
            navigation.navigate('RiderDeliveries');
          }}>
          <View style={tw`flex flex-col mr-4 shadow`}>
            <View
              style={tw`bg-white rounded-md w-36 h-36 flex items-center justify-center`}>
              <Image source={require('../assets/img/delivery-rider.png')} />
            </View>
            <Text style={tw`text-black text-center mt-4 text-base font-medium`}>
              Rider
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            // navigation.navigate('RiderDeliveries');
            console.log('go to trruck deliveries view');
          }}>
          <View style={tw`flex flex-col ml-4 shadow`}>
            <View
              style={tw`bg-white rounded-md w-36 h-36 flex items-center justify-center`}>
              <Image source={require('../assets/img/delivery-truck.png')} />
            </View>
            <Text style={tw`text-black text-center mt-4 text-base font-medium`}>
              Truck Driver
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
