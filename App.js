/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import CustomSearch from './src/component/CustomSearch';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <CustomSearch />
    </>
  );
};

export default App;
