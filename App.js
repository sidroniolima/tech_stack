import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const App = () => {
  <Provider store={ createStore }>
    <View />
  </Provider>
}
