import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    backgroundColor: '#eee',
  },
  containerMain: {
    flex: 9,
    backgroundColor: '#eee',
  },
  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerHeaderLogo: {
    backgroundColor: '#eee',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {height: -3},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
});
