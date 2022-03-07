import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

export default function LoadingScreen() {
  return (
    <View style={styles.loading_container}>
      <ActivityIndicator size="large" />
    </View>
  );
}
